import Pdf from '/src/assets/Shivam_Bhandari_Resume.pdf'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[white]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="pb-4">
          Hi, I'm
        </p>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-black font-bold">Shivam Bhandari</h1>
        <p className='text-[#3d3d3f] pt-4 max-w-[700px]'>
          I'm a computer science major at UC Davis and a ML intern at {' '}
          <a
            className="underline"
            href="https://www.aivisionfood.com/"
            target="_blank"
            rel="noreferrer"
          >
            AIVF
          </a>
          {'. '}
          At AIVF, I help automate their insect detection processes. At UC Davis, I am a director at
          {' '}
          <a
            className="underline"
            href="https://hackdavis.io/"
            target="_blank"
            rel="noreferrer"
          >
            Hackdavis
          </a>
          {' '} and
          {' '}
          <a
            className="underline"
            href="https://www.instagram.com/aiscdavis/"
            target="_blank"
            rel="noreferrer"
          >
            The AI Student Collective
          </a>
          {'.'}
          <a href={Pdf}
            target="_blank"
            rel="noreferrer">
            <div className='pt-2'>
              <button className='text-black group border-2 px-4 py-2 my-2 flex items-center border-black hover:bg-black hover:text-white hover:border-black'>
                Click Here
              </button>
            </div>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
