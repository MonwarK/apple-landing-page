import styled from "styled-components"
import { ChevronRightIcon } from "@heroicons/react/outline"

export default function HomeSection({title, image, color = "white"}) {
    return (
        <div className={`text-center text-${color} my-3`}>
            <Container style={{backgroundImage: `url(${image})`}}>
                <h1 className="text-5xl font-semibold">{title}</h1>
                <h2 className="text-2xl my-2">Blast past fast.</h2>
                <p className="text-gray-400 font-medium">From £29.12 mo. or £699 before trade-in.</p>
                <div className="flex justify-center space-x-9 mt-5 text-xl text-blue-500">
                    <div className="hover:animate-bounce flex items-center">
                        <label className="cursor-pointer hover:underline">Learn more</label>
                        <ChevronRightIcon width={20} className="m-2 mt-3" />
                    </div>
                    <div className="hover:animate-bounce flex items-center">
                        <label className="cursor-pointer hover:underline">Buy</label>
                        <ChevronRightIcon width={20} className="m-2 mt-3" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

const Container = styled.div`
    height: 70vh;
    background-size: cover;
    background-position: center;
    padding: 50px 0;
`