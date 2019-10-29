import React from 'react'

const AddNewNinja = ({addNinja}) => {
    return (
        <div>
            <hr/>
            <h3>Add new Ninja</h3>
            <form onSubmit = {addNinja} >
                <input type="text" placeholder="Name" name="name"/>
                <br/>
                <input type="number" placeholder="Age" name = "age"/>
                <br/>
                <input type="text" placeholder="Belt" name = "belt"/>
                <br/>
                <input type="submit"/>
                <hr/>
            </form>
        </div>
    )
}

export default AddNewNinja
