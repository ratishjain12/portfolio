function Projectcard() {
  return (
    <div className="project-card w-[250px] h-[400px] ">
      <img
        src="https://images.unsplash.com/photo-1681276159290-29989388a728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
        className="w-full h-[200px]"
      />
      <h4 className="text-center mt-2 text-2xl">Usabilityhub-clone</h4>
      <p className="mt-4 mb-4 px-2">
        <b>Stack: </b>
        <span>HTML CSS JAVASCRIPT REACTJS</span>
      </p>
      <div className="button-container mt-8">
        <button className="px-1 py-2 border-2 border-black mr-4 ml-1 hover:text-white hover:bg-black">
          Source code
        </button>
        <button className="px-6 py-2 border-2 border-black hover:text-white hover:bg-black">
          Live site
        </button>
      </div>
    </div>
  );
}
export default Projectcard;
