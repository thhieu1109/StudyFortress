import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, IconButton, Stack } from '@mui/material';
import { Edit, Trash2 } from 'lucide-react';
import { useCategories } from '../../../contexts/CategoryProvider';
import ModalDeleted from '../../../components/admin/ModalDeleted';
import { deleteDocument } from '../../../services/firebaseService';

function TableCategory({ setCategory, category, handleOpenAdd, searchCategory }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const categories = useCategories();
  const paginationModel = { page: 0, pageSize: 5 };

  const handleOpenDeleteModal = (row) => {
    setOpenDeleteModal(true);
    setCategory(row);
  };
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleDeleteCategories = async () => {
    await deleteDocument("categories", category);
    handleCloseDeleteModal();
  };

  const handleEditCategory = (row) => {
    handleOpenAdd();
    setCategory(row);
  };

  const columns = [
    {
      field: 'index',
      headerName: '#',
      width: 60,
      sortable: false,
      filterable: false,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      cellClassName: "name-column--cell"
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 2,
      minWidth: 200
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Stack sx={{
          width: '100%',
          height: '100%', // để chiếm full cell
          display: 'flex',
          alignItems: 'center', // center theo chiều dọc
          justifyContent: 'center' // center theo chiều ngang
        }} direction="row" spacing={1}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleEditCategory(params.row)}
          >
            <Edit size={16} />
          </IconButton>
          <IconButton
            color="error"
            size="small"
            onClick={() => handleOpenDeleteModal(params.row)}
          >
            <Trash2 size={16} />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <>
      <Paper
        sx={{
          height: 500,
          width: '100%',
          p: 2,
          borderRadius: 3,
          boxShadow: 3
        }}
      >
        <DataGrid
          rows={categories
            .filter(e => e.name.toLowerCase().includes(searchCategory.toLowerCase())) // lọc theo keyword
            .map((e, index) => ({
              ...e,
              index: index + 1,
              id: e.id || index + 1 // đảm bảo có id duy nhất
            }))
          }

          columns={columns}
          getRowId={(row) => row.id}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          initialState={{ pagination: { paginationModel } }}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontWeight: 'bold',
              fontSize: 14
            },
            "& .MuiDataGrid-cell": {
              fontSize: 14
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#fafafa"
            }
          }}
        />
      </Paper>

      <ModalDeleted
        openDeleteModal={openDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
        handleDeleteCategories={handleDeleteCategories}
      />
    </>
  );
}

export default TableCategory;
