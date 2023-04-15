import React from 'react';
import styled from 'styled-components';
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase';

function SidebarOption({ Icon, title, addChannelOption }) {
    const [channels, loading, error] = useCollection(db.collection("room"));

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            db.collection('room').add({
                name: channelName,
            });
        }
    };

    const selectChannel = () => {};

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon style={{ margin: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
`;

const SidebarOptionChannel = styled.div``;