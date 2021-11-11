import { useState } from 'react';
import { Header } from "../../components/Header";
import { ActivyTables } from '../../components/ActivyTables';
import { Summary } from '../../components/Summary';
import {NewActivyModal} from '../../components/NewActivyModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

import {Container} from './styles'

export function Dashboard() {

    const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)


    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true);
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }


    return (
        <>
            <Header 
                onOpenNewActivyModal={handleOpenActivyModal} 
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivyTables />
            </Container>
            <NewActivyModal 
                isOpen={isNewActivyModalOpen}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnitModal 
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}