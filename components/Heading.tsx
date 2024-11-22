import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Heading = ({heading,subheading}:{heading:string,subheading:string}) => {
    return (
        <div className="text-center mb-8">
            
            <h2 className="text-4xl font-bold ">
                <Typewriter
                    words={[heading]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <p className="text-muted-foreground text-md mt-4">
                {subheading}
            </p>
        </div>
    )
}

export default Heading
