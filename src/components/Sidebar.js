import { Add, Bookmark, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, People } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption';
import { AppBar } from '@material-ui/core';
import { db } from '../firebase';
import { useCollection } from "react-firebase-hooks/firestore";
import { doc } from 'firebase/firestore';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("room"));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>HQ</h2>
                    <h3>
                        <FiberManualRecord />
                        Sonny Sangha
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>

            <SidebarOption Icon={InsertComment} title="Threads" />
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved Items" />
            <SidebarOption Icon={Bookmark} title="Channel brower" />
            <SidebarOption Icon={People} title="People & user groups" />
            <SidebarOption Icon={AppBar} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

            {channels?.docs.map((doc) => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    addChannelOption
                    title={doc.data.name}
                />
            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    >h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;