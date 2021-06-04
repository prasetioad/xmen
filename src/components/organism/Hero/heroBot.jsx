import React from 'react'
import HeroTable from '../../moleculs/table/HeroTable'

function Index({data}) {
    return (
        <div>
            <div className="tableContainer" style={{width: '95vw', marginLeft: 'auto', marginRight:'auto', marginTop: '20px'}}>
                <div style={{textAlign: 'left', width: '70%', marginLeft: 'auto', marginRight:'auto'}}>
                    <HeroTable data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Index
