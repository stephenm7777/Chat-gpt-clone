import { SunIcon, BoltIcon, ExclamationTriangleIcon,  } from "@heroicons/react/24/outline";

function page() {
  return (
    <div className=" flex flex-col items-center justify-center text-white h-screen px-2">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className="flex space-x-2 text-center"> 
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*Sun Icon */}
                    <SunIcon className="h-6 w-6" />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Explain something to me"</p>
                    <p className="infoText">"What is the difference between a dog and a cat?"</p>
                    <p className="infoText">"What is the color of the sun?"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*Bolt Icon */}
                    <BoltIcon className="h-6 w-6" />
                    <h2>Capabilites</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Change ChatGPT Model to use"</p>
                    <p className="infoText">"Messages are stored in Firebase Firestore"</p>
                    <p className="infoText">"Hot Toast notification when ChatGPT is thinking"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/*warningIcon */}
                    <ExclamationTriangleIcon className="h-6 w-6" />
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"May occasionally generate incorrect information"</p>
                    <p className="infoText">"May occasionally produce harmful instructions or biased content"</p>
                    <p className="infoText">"Limited knowledge of the world and events after 2021"</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page