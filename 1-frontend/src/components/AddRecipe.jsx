import React from 'react'

const AddRecipe = () => {
  return (
    <>
      <div className="container my-5 p-5" style={{
        width:"500px",
        border:"2px solid black",
        borderRadius:"10px"
      }}>
        <h2 className="text-center"> Create Recipe</h2>
        <form style={{
          width:"400px",
          margin:"auto",

        }}
        className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Instruction</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing1</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing2</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing3</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing4</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty1</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty2</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty3</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty4</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">imgUrl</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          
          <div className="container d-grid col-6 ">
          <button type="submit" className="btn btn-primary mt-3">Create Recipe</button>
          </div>
         
        </form>
      </div>
    </>
  )
}

export default AddRecipe;
