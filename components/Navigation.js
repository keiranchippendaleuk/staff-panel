import {useSession, signOut} from "next-auth/client";
import {Avatar, Box, Button, Header, Image, Menu, Nav, Sidebar, Text} from "grommet";
import {useState, useEffect} from "react";
import {Menu as MenuFeather} from "react-feather";
import {useRouter} from "next/router";


export default function Navigation({darkMode, setDarkMode}) {
    const [session] = useSession();
    const [showSidebar, setShowSidebar] = useState(true);
    const router = useRouter();

    function changeTheme(event) {
        event.preventDefault();
        if (process.browser) localStorage.setItem("darkMode", `${!darkMode}`);
        setDarkMode(!darkMode);
    }

    function changeSidebar(event) {
        event.preventDefault();
        if (process.browser) localStorage.setItem("showSidebar", `${!showSidebar}`);
        setShowSidebar(!showSidebar);
    }

    useEffect(() => {
        if (process.browser) {
            const storageSidebar = localStorage.getItem("showSidebar");
            if (storageSidebar) setShowSidebar(JSON.parse(storageSidebar));

            const storageDarkMode = localStorage.getItem("darkMode");
            if (storageDarkMode) setDarkMode(JSON.parse(storageDarkMode));
        }
    }, []);

    return (
        <div style={{height: "100%"}}>
            <Header style={{float: "right", fontFamily: "'Noto Sans', sans-serif"}}>
                <Menu icon={false} label={<Box direction="row" gap="small">{session ? session.user.name : ""} <Avatar
                    src={session ? session.user.image: ""}/></Box>}
                      items={[{label: "Toggle theme", onClick: changeTheme}, {label: "Logout", onClick: () => {signOut(); router.push("/")}}]}/>
            </Header>
            {
                showSidebar ?
                    <Sidebar width="35vh" background="brand"
                             header={<Text align="start" textAlign="center">Hololive Resistance Discord<br/>Staff
                                 Dashboard</Text>}
                             footer={<Button height="xxsmall" label={<MenuFeather/>} onClick={changeSidebar}/>}
                    >
                        <Nav gap="small">

                        </Nav>
                    </Sidebar>
                    :
                    <Sidebar width="xsmall" background="brand"
                             header={<Image alignSelf="start" src="/img/logo.png" alt="Logo"
                                            style={{maxWidth: "60px"}}/>}
                             footer={<Button width="xxsmall" label={<MenuFeather/>} onClick={changeSidebar}/>}
                    >
                        <Nav gap="small">

                        </Nav>
                    </Sidebar>
            }
        </div>
    );
}