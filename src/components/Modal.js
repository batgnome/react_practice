import { names,uniqueNamesGenerator } from "unique-names-generator";
import Footer from "./Footer";
import Header from "./Header";
export default function Modal() {
    const randomName = uniqueNamesGenerator({ dictionaries: [names] }); // big_red_donkey

    return (
        <>
            <div style={{textAlign: "center"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Membership</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 100 }).map((_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{uniqueNamesGenerator({ dictionaries: [names] })}</td>
                                <td>{10000+index + 1} North Bingo, Surprise, AZ, {80000+index + 1}</td>
                                <td>Gold</td>
                                <td>{Math.floor(Math.random()*100)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
