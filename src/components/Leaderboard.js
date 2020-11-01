import React from 'react'

export default function Leaderboard(props) {

    let renderTable = () => {
     return   props.leaderboard.map(s=> 
            <tr key={s.id}>
                    <td>
                        {s.name}
                    </td>
                    <td>
                        {s.score}
                    </td>
                  </tr>
        )
    }
    return (
        <div className = "leader-board">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                    {renderTable()}
            </table>
        </div>
    )
}
