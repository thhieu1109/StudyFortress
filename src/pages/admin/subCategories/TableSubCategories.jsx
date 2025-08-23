import { DataGrid } from "@mui/x-data-grid";
import ModalDeleted from "../../../components/admin/ModalDeleted";
import { useSubCategories } from "../../../contexts/SubCategoryProvider";
import { IconButton, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { deleteDocument } from "../../../services/firebaseService";
import { useCategories } from "../../../contexts/CategoryProvider";


function TableSubCategory({ setSubCategory, subCategory, handleOpenAdd, searchSubCategory }) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const subCategories = useSubCategories(); // custom hook đổi lại tên
    const paginationModel = { page: 0, pageSize: 5 };
    console.log(subCategories);

    const categories = useCategories();
    const getCategoryName = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.name : "N/A";
    };
    const handleOpenDeleteModal = (row) => {
        setOpenDeleteModal(true);
        setSubCategory(row);
    };

    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    const handleDeleteSubCategory = async () => {
        await deleteDocument("subcategories", subCategory);
        handleCloseDeleteModal();
    };

    const handleEditSubCategory = (row) => {
        handleOpenAdd();
        setSubCategory(row);
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
            field: 'categoryId',
            headerName: 'Category',
            flex: 1,
            minWidth: 150,
            renderCell : (params) => {
                const name = getCategoryName(params.row.categoryId);
                return name ;
            }
        }
        ,
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
                <Stack
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    direction="row"
                    spacing={1}
                >
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleEditSubCategory(params.row)}
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
                    rows={subCategories.map((e, index) => ({
                        ...e,
                        index: index + 1,
                        id: e.id || index + 1
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
                handleDeleteCategories={handleDeleteSubCategory}
            />
        </>
    );
}

export default TableSubCategory;
