import React from 'react'

const Showdata = ({text}) => {
  return (
        <>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <table>
                            <thead className = "thead">
                                <th>Description</th>
                                <th>Temp</th>
                                <th>Max Temp</th>
                                <th>Min Temp</th>                                
                            </thead>
                            <tbody className = "tbody">
                                 <td>{text.description}</td>
                                 <td>{text.temp}</td>
                                 <td>{text.temp_max}</td>
                                 <td>{text.temp_min}</td>
                            </tbody>                            
                        </table>
                        <table>
                            <thead className = "thead">
                                <th>Grnd Level</th>
                                <th>Sea Level</th>
                                <th>Timezone</th>
                                <th>Visibility</th>                                
                            </thead>
                            <tbody className = "tbody">
                                 <td>{text.grnd_level}</td>
                                 <td>{text.sea_level}</td>
                                 <td>{text.timezone}</td>
                                 <td>{text.visibility}</td>
                            </tbody>                            
                        </table>
                        <table>
                            <thead className = "thead">
                                <th>Sunrise</th>
                                <th>Sunset</th>
                                <th>Humidity</th>
                                <th>Country</th>                                
                            </thead> 
                            <tbody className = "tbody">
                                 <td>{text.sunrise}</td>
                                 <td>{text.sunset}</td>
                                 <td>{text.humidity}</td>
                                 <td>{text.country}</td>
                            </tbody>                                         
                        </table>                    
                    </div>
                </div>
            </div>
        </>
  )
}

export default Showdata