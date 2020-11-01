import React from 'react'

export default function Leaderboard(props) {

    // let randomEmoji = () => {
    //      const emojiArr = ["🤡",
    //      "🥴","😄","😎","👽","😈","🤖",
    //      "😇","😜","😒","😏","🙃","🙂","🧐",
    //      "🤯","🤓","🎃","👻","😸","😺","👩🏽‍🎤"]

    //      const random = Math.floor(Math.random() * emojiArr.length);

    //      return random
    // }

    let renderTable = () => {
        let sortedLeaderBoard = props.leaderboard.sort(function(a, b){return b.score-a.score})

        

        return   sortedLeaderBoard.map(s=> 
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
                    <th className="th-name">Name</th>
                    <th>Score</th>
                </tr>
                    {renderTable()}
            </table>
        </div>
    )
}
