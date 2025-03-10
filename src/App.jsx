

function App() {
  

  return (
    <>
 <div className="flex justify-center">
 <div className="my-20 max-w-[600px] pl-5 border-2 p-5 ">

<h1 className="text-6xl font-bold pb-10">
  Registration From 
</h1>
<div className="flex justify-between">
<div className="my-2">
<p className="text-xl font-bold">Your Name: </p>
<input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" placeholder="You Name"/>
</div>
<div className="my-2">
<p className="text-xl font-bold">Roll number: </p> 
<input type="text" className="border-2 rounded-md h-[40px]  w-[200px] font-bold text-gray-600 text-xl p-3"
placeholder="Roll number"/>
</div>
</div>
<div className="flex justify-between">
<div className=" my-2">
<p className="text-xl font-bold">Email address:</p>
<input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
placeholder="Email address"/> 
</div>
<div className="my-2">
<p className="text-xl font-bold">Mobile number:</p>
<input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
placeholder="Mobile number"/> 
</div>
</div>
<div className="flex justify-between">
<div className="my-2">
<p className="text-xl font-bold">Present address:</p>
<input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
placeholder="Present address"/> 
</div>
<div className="my-2">
<p className="text-xl font-bold">Date of birth:</p>
<input type="text" className="border-2 rounded-md h-[40px] w-[200px] font-bold text-gray-600 text-xl p-3" 
placeholder="Date of birth"/> 
</div>
</div>

<div className="my-3">
<p className="text-xl font-bold">comments:</p>
<input type="text" className="border-2 rounded-md h-[200px] w-[400px] font-bold text-gray-600 text-xl p-3" 
placeholder="comments"/> 
</div>
<div className="flex justify-center">
  <button className="bg-black p-2 text-amber-50 rounded-2xl">
    Submit
  </button>
</div>

</div>
 </div>
     
    </>
  )
}

export default App
