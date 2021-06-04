import React from 'react'

function Index({content}) {
    return (
        <div style={{width: '95vw', marginRight: 'auto', marginLeft: 'auto'}}>
            <div className="heroContainer" style={{width: '70%', marginLeft: 'auto', marginRight:'auto', marginTop: '100px'}}>
                <div className="heroHeader" style={{background: '#d1ecf1', color: '#0c5460', borderColor: '#bee5eb', borderRadius: '0.25rem'}}>
                    <div style={{padding: '0.75rem 1.25rem'}}>
                        <p style={{marginBottom: '0'}}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
