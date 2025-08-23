import { Autocomplete, Box, Button, Divider, Fade, Modal, TextField, Typography } from "@mui/material";
import { useCategories } from "../../../contexts/CategoryProvider";

function ModalSubCategory({
    openAddModal,
    handleCloseAdd,
    handleChange,
    handleAdd,
    subCategory,
    error
}) {
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
    const categories = useCategories();

    
    return (
        <Modal open={openAddModal} onClose={handleCloseAdd} closeAfterTransition>
            <Fade in={openAddModal}>
                <Box tabIndex={-1} sx={modalStyle}>

                    {/* Title */}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        gutterBottom
                    >
                        {subCategory?.id ? "Edit SubCategory" : "Add SubCategory"}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    {/* Input Name */}
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={subCategory?.name}
                        onChange={handleChange}
                        margin="normal"
                        variant="outlined"
                        autoFocus
                        error={!!error.name}
                        helperText={error.name}
                    />
                    <Autocomplete
                        disablePortal
                        fullWidth
                        sx={{ mt: 1 }}
                        options={categories}
                        value={categories.find(e => e.id == subCategory?.categoryId)}
                        onChange={(event, newValue) => handleChange({ target: { name: "categoryId", value: newValue ? newValue.id : "" } })}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Chọn category"  error={!!error.categoryId}
                        helperText={error.categoryId} />}
                        noOptionsText="No result"
                    />

                    {/* Input Description */}
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={subCategory?.description}
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
                            {subCategory?.id ? "Edit SubCategory" : "Add SubCategory"}
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ModalSubCategory;
