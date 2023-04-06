function MainComponent() {
  return (
    <main className="Main container">
      <div>
        <span>New</span>
        <h3>Monograph Dashboard</h3>
      </div>

      <h1 className="Main__Title">Powerful insights into your team</h1>
      <p className="Main__Paragraph">
        Project plaining and time tracking for agile teams
      </p>

      <div>
        <button className="Main__Button">Schedule a demo</button>
        <button className="Main__Button Main__Button--second">
          to See a preview
        </button>
      </div>
    </main>
  );
}

export default MainComponent;
