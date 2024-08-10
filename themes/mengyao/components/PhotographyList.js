export default () => {
  return (
    <>
      <section classname="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div classname="container overflow-hidden">
          <h2 classname="title text-center text-4xl font-extrabold py-6 ">
            Tailwind Gallery
          </h2>
          <div classname="gallery_container flex flex-wrap justify-evenly">
            <img
              src="https://images.unsplash.com/photo-1633113218833-f0b9912cfe1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.unsplash.com/photo-1565536421951-135eb52b6e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.unsplash.com/photo-1642277967363-e7a80304e834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/2880872/pexels-photo-2880872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/4492074/pexels-photo-4492074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/4487445/pexels-photo-4487445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
            <img
              src="https://images.pexels.com/photos/5470452/pexels-photo-5470452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              classname="img-gallery hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110"
            />
          </div>
        </div>
      </section>
      {/* <section classname="image-lightbox bg-black fixed bg-opacity-60 w-full h-full top-0 left-0 flex justify-center items-center">
        <svg
          classname="h-6 w-6 close absolute top-[40px] right-[30px] width-[40px] cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <img
          src="./img/img-3.jpg"
          alt=""
          classname="image-pop object-cover rounded transition-all duration-300 "
        />
      </section> */}
    </>
  )
}
