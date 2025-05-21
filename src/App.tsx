function App() {
  return (
    <div>
      <div className="flex justify-center items-center mb-50 mt-10">
        <h1 className="text-7xl font-semibold">Arkivet</h1>
      </div>
      <div className="archiveGrid grid grid-cols-3 grid-rows-3 m-auto w-9/10 gap-10">
        <div className="aspect-2/1 w-full rounded-xl bg-green-500">
          <h2 className="skola77 text-4xl text-white font-semibold text-center">
            Skola77
          </h2>
        </div>
        <div className="helenelundDotOrg aspect-2/1 full rounded-xl bg-[#f2f2f2]">
          <h2 className="text-4xl font-semibold text-center">Helenelund.org</h2>
        </div>
        <div className='texter bg-black aspect-2/1 w-full rounded-xl'>
          <h2 className="text-4xl font-semibold text-white text-center">Texter</h2>
        </div>
      </div>
    </div>
  )
}

export default App
