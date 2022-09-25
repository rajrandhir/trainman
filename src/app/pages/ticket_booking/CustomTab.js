import React, { useState } from 'react'
import { Box, Tab, Tabs } from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SearchByStationTab from './SearchByStationTab';
import SearchByTrainTab from './SearchByTrainTab'

const CustomTab = () => {
    const [value, setValue] = useState(0);
    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (
            <div role="tabpanel" hidden={value !== index}>
                {value === index && <Box>{children}</Box>}
            </div>
        );
    };
    const handleChange = (event, item) => {
        setValue(item);
    };
    return (
        <>
            <Box>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "100%",
                    }}>
                    <Tabs
                        value={value}
                        textColor="primary"
                        indicatorColor="primary"
                        onChange={handleChange}

                    >
                        <Tab
                            label="Search By Station"
                            sx={{ textTransform: "none", fontWeight: "bold" }}
                        ></Tab>
                        <Tab
                            label="Search By Train/No"
                            sx={{ textTransform: "none", fontWeight: "bold" }}
                        ></Tab>

                    </Tabs>

                </Box>
                <TabPanel value={value} index={0}>
                    <SearchByStationTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SearchByTrainTab />
                </TabPanel>
            </Box>

        </>
    )
}

export default CustomTab;

