import  { useEffect, useRef, useState } from 'react'
import {motion, AnimatePresence} from 'motion/react'
const Hoverable_cards = () => {
    const [current, setCurrent ] = useState(null);
   const Cards = [
  {
    name: "Explore Space",
    title: "Journey Beyond Earth",
    description: 
      "Dive deep into the history and technology of human space exploration. From the first moon landing to Mars rovers, discover what it takes to explore the cosmos Learn about rocket science, astronaut training, and future missions to the Moon, Mars, and beyond.",
    img: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    button: "Play"
  },
  {
    name: "Master Classical",
    title: "Timeless Music Techniques",
    description:
      "Learn the fundamentals of classical guitar including fingerpicking, music theory, and iconic compositions to master the elegance of acoustic performance.Explore different genres and compositions by legendary composers to enrich your playing style with finesse and emotion.",
    img: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    button: "Play"
  },
  {
    name: "Introduction to AI",
    title: "Build the Future",
    description:
      "Understand the basics of artificial intelligence and robotics, from algorithms and sensors to real-world applications and ethical considerations in modern tech.Explore machine learning models, computer vision, and AI ethics in projects that shape tomorrow's technology landscape.",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    button: "Play"
  },
  {
    name: "Creative Watercolor",
    title: "Paint with Emotion",
    description:
      "Unlock the beauty of watercolor painting through experimental techniques, brush control, and expressive compositions inspired by nature and emotion.Practice blending, layering, and wet-on-wet methods while creating vibrant and imaginative artwork.",
    img: "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    button: "Play"
  },
  {
    name: "Wildlife Photography",
    title: "Capture the Wild",
    description:
      "Master camera settings, lighting, and timing to capture powerful and emotional photos of wildlife in their natural habitats with ethical practices.Gain tips on approaching wildlife safely, telling visual stories, and using gear to achieve stunning results.",
    img: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    button: "Play"
  }
];
 const cardRef = useRef(null);
useEffect(() => {
  const handleOutsideClick = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setCurrent(null);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);


    return (
        <>
         
           <AnimatePresence>
            <div className="h-screen bg-amber-300 flex flex-col justify-center items-center px-4 relative">
                    {current && (
                        <div className='h-full w-full fixed bg-black/50 backdrop:blur-lg flex items-center justify-center'>
                        
                        </div>
                    )}
                       {current && (
                   <motion.div
                    layoutId={`card-id-${current.title}`}
                   ref={cardRef}
                   className='flex flex-col items-center m-auto w-[350px] h-[600px] rounded-2xl ring-2 ring-blue-700 bg-white z-10 fixed inset-0 p-4 shadow-lg shadow-blue-700'>
                    <motion.div
                    layoutId={`card-img-${current.img}`}
                    className='w-full h-[200px] bg-no-repeat bg-center bg-cover rounded-3xl'
                        style={{ backgroundImage: `url(${current.img})` }}>

                    </motion.div>
                    <motion.div
                    layoutId={`card-img-${current.name}`}
                    className="flex items-center gap-10">
                        <div className="text-start">
                            <h3 className="text-xl font-bold text-black">{current.name}</h3>
                            <p className="text-sm text-neutral-500 mt-2">{current.title}</p>
                        </div>
                        <div className="px-4 py-1 bg-green-400 text-white font-semibold rounded-full">
                            {current.button}
                        </div>
                    </motion.div>
                    <motion.div
                    layoutId={`card-desc-${current.description}`}
                    className='w-full h-auto overflow-y-scroll mt-5'>
                        {current.description}
                    </motion.div>
                </motion.div>
            )}
                {Cards.map((card, idx) => (
                    <motion.button
                    layoutId={`card-id-${card.title}`}
                        onClick={()=>{setCurrent(card)}}
                        key={idx}
                        type="button"
                        className="cursor-pointer w-full max-w-[500px] rounded-3xl flex items-center justify-between gap-5 my-2 bg-white p-4 shadow-md hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                            layoutId={`card-img-${card.img}`}
                                className="w-[80px] h-[80px] rounded-lg bg-no-repeat bg-center bg-cover"
                                style={{ backgroundImage: `url(${card.img})` }}
                            ></motion.div>
                            <motion.div
                            layoutId={`card-img-${card.name}`}
                            className="text-start">
                                <h3 className="text-xl font-bold text-black">{card.name}</h3>
                                <p className="text-sm text-neutral-500 mt-2">{card.title}</p>
                            </motion.div>
                        </div>
                        <motion.div
                         layoutId={`card-desc-${card.description}`}
                        className="px-4 py-1 bg-green-400 text-white font-semibold rounded-full">
                            {card.button}
                        </motion.div>
                    </motion.button>
                ))}
            </div>
           </AnimatePresence>
            

        </>
    )
}

export default Hoverable_cards
