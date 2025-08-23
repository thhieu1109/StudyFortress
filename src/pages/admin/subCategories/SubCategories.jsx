import { useState } from "react";
import SearchbarAdmin from "../../../components/admin/SearchbarAdmin";
import ModalSubCategories from "./ModalSubCategories";
import TableSubCategories from "./TableSubCategories";
import { addDocument, updateDocument } from "../../../services/firebaseService";


const inner = { name: "", description: "", categoryId : "" }

function SubCategories() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [error, setError] = useState(inner)
    const [subCategory, setSubCategory] = useState(inner);
    const [searchSubCategory, setSearchSubCategory] = useState("");

    const handleOpenAdd = () => {
        setSubCategory(inner);
        setOpenAddModal(true);
    };

    const handleCloseAdd = () => {
        setError(inner)
        setOpenAddModal(false);
    }

    const handleChange = (e) => {
        setSubCategory({ ...subCategory, [e.target.name]: e.target.value })
    }

    const handleAdd = async () => {
        if (!validation()) {
            return
        }
        if (subCategory.id) {
            const { index, ...uSubCategory } = subCategory;
            await updateDocument("subcategories", uSubCategory);
        } else {
            await addDocument("subcategories", subCategory);
        }
        handleCloseAdd();
    }

    const validation = () => {
        const newError = {}
        newError.name = subCategory.name ? "" : "Please enter your name";
        newError.description = subCategory.description ? "" : "Please enter your description";
        newError.categoryId = subCategory.categoryId ? "" : "Please enter your category"
        setError(newError)
        return Object.values(newError).every(element => element === "")
    }

    return (
        <div className="bg-white rounded-lg shadow">
            <ModalSubCategories 
                error={error} 
                subCategory={subCategory} 
                openAddModal={openAddModal} 
                handleAdd={handleAdd} 
                handleCloseAdd={handleCloseAdd} 
                handleChange={handleChange} 
            />
            <SearchbarAdmin 
                handleOpenAdd={handleOpenAdd} 
                title={"SubCategories"} 
                searchCategory={searchSubCategory} 
                setSearchCategory={setSearchSubCategory} 
            />
            <TableSubCategories  
                handleOpenAdd={handleOpenAdd} 
                setSubCategory={setSubCategory} 
                subCategory={subCategory} 
                searchCategory={searchSubCategory} 
            />
        </div>
    );
}

export default SubCategories;
