const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Text" />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type="text" placeholder="Set day" />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox"/>
      </div>
      <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}

export default AddTask