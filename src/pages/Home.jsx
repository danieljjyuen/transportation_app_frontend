import GroupLine from "../components/GroupLine"

const Home = () => {
    return (
        <div>
            <GroupLine line='yellowLines' trainsArray={['N', 'Q', 'R', 'W']} />
            <GroupLine line='orangeLines' trainsArray={['B', 'D', 'F', 'M']} />
            <GroupLine line='brownLines' trainsArray={['J', 'Z']} />
            <GroupLine line='sirLines' trainsArray={['SI', 'SS']} />
            <GroupLine line='greenLines' trainsArray={['G']} />
            <GroupLine line='blueLines' trainsArray={['A', 'C', 'E']} />
            <GroupLine line='lTrainLines' trainsArray={['L']} />
            <GroupLine line='numberLines' trainsArray={['1', '2', '3', '4', '5', '6', '7']} />
        </div>
    )
}

export default Home