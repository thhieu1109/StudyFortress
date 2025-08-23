import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    Fade,
    Divider,
} from "@mui/material";

function ModalCategory({ openAddModal, handleCloseAdd, handleChange, handleAdd, category, error  }) {
    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 420,
        bgcolor: "background.paper",
        borderRadius: "16px",
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal open={openAddModal} onClose={handleCloseAdd} closeAfterTransition>
            <Fade in={openAddModal}>
                <Box tabIndex={-1} sx={modalStyle}>
                    {/* Tiêu đề */}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        {category?.id ? "Edit Category" : "Add Category"}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    {/* Input Name */}
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={category?.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        autoFocus
                        error={!!error.name}
                        helperText={error.name}
                    />

                    {/* Input Description */}
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={category?.description}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={3}
                        variant="outlined"
                        error={!!error.description}
                        helperText={error.description}
                    />

                    {/* Buttons */}
                    <Box
                        mt={3}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: 1.5,
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleCloseAdd}
                            sx={{ borderRadius: "8px" }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleAdd}
                            sx={{
                                background: "linear-gradient(135deg, #4CAF50, #45A049)",
                                borderRadius: "8px",
                                textTransform: "none",
                            }}
                        >
                             {category?.id ? "Edit Category" : "Add Category"}
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ModalCategory;
