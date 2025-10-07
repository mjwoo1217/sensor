// pages/users.tsx
import { useEffect, useState } from "react";

type Test = {
    id: number;
    name: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<Test[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/user") // Java 서버 주소
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>유저 리스트</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}