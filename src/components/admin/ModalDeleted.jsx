import React from 'react';
import {
    Modal,
    Box,
    Typography,
    Button,
    IconButton,
    Fade
} from '@mui/material';
import { WarningAmber as WarningAmberIcon, Close as CloseIcon } from '@mui/icons-material';

function ModalDeleted({ openDeleteModal, handleCloseDeleteModal, handleDeleteCategories }) {
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 3,
        outline: 'none'
    };

    return (
        <Modal open={openDeleteModal} onClose={handleCloseDeleteModal} closeAfterTransition>
            <Fade in={openDeleteModal}>
                <Box sx={modalStyle}>
                    {/* Nút đóng */}
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseDeleteModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Icon cảnh báo */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <WarningAmberIcon sx={{ fontSize: 60, color: 'error.main' }} />
                    </Box>

                    {/* Tiêu đề */}
                    <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
                        Confirm Deletion
                    </Typography>

                    {/* Nội dung */}
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
                        Are you sure you want to delete this? This action cannot be undone.
                    </Typography>

                    {/* Nút hành động */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={handleCloseDeleteModal}
                            sx={{
                                textTransform: 'none',
                                borderRadius: 2,
                                px: 3
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDeleteCategories}
                            sx={{
                                textTransform: 'none',
                                borderRadius: 2,
                                px: 3,
                                boxShadow: '0 3px 5px rgba(255,0,0,0.3)',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(255,0,0,0.4)'
                                }
                            }}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ModalDeleted;
