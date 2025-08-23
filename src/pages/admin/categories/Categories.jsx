
import ModalCategory from './ModalCategory';
import SearchbarAdmin from '../../../components/admin/SearchbarAdmin';
import TableCategory from './TableCategory';
import { useState } from 'react';
import { addDocument, updateDocument } from '../../../services/firebaseService';

const inner = { name: "", description: "" }
function Categories() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [error, setError] = useState(inner)
    const [category, setCategory] = useState(inner);
    const [searchCategory, setSearchCategory]= useState("");

    const handleOpenAdd = () => {
        setCategory(inner);
        setOpenAddModal(true);
    };
    const handleCloseAdd = () => {
        setError(inner)
        setOpenAddModal(false);
    }

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleAdd = async () => {
        
        if(!validation()){
            return
        }
        if (category.id) {
            const { index, ...uCategory } = category;
            await updateDocument("categories", uCategory);
        } else {
            await addDocument("categories", category);
        }
        handleCloseAdd();
    }


    const validation = () => {

        const newError = {}

        newError.name = category.name ? "" : "Please enter your name"
        newError.description = category.description ? "" : "Please enter your description"
        setError(newError)
        return Object.values(newError).every(element => element == "")
    }

    return (
        <div className="bg-white rounded-lg shadow">
            <ModalCategory error={error}  category={category} openAddModal={openAddModal} handleAdd={handleAdd} handleCloseAdd={handleCloseAdd} handleChange={handleChange} />
            <SearchbarAdmin handleOpenAdd={handleOpenAdd} title={"Categories"} searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
            <TableCategory handleOpenAdd={handleOpenAdd} setCategory={setCategory} category={category} searchCategory={searchCategory} />
        </div>
    );
}

export default Categories;