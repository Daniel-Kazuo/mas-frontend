import { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import { format } from 'util';

interface CourseUnit {
    name: string;
}

interface Activy {
    id: string;
    name: string;
    grade: number;
    activy_date: string;
    course_unit: CourseUnit
}

export function ActivyTables() {

    const [activies, setActivies] = useState<Activy[]>([])

    useEffect(() => {

        api.get('/activy')
            .then(response => setActivies(response.data))
    },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activies.map(activy => {
                            return (
                                <tr key={activy.id}>
                                    <td>{activy.course_unit.name}</td>
                                    <td>{activy.name}</td>
                                    <td>{activy.grade}</td>
                                    <td>{format(parseISO(activy.activy_date), 'dd/MM/yyyy')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}

function parseISO(activy_date: string): any {
    throw new Error('Function not implemented.');
}
