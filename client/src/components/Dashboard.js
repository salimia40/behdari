import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, Box } from "@material-ui/core";

import { Title } from "react-admin";
const Dashboard = () => (
  <Box height={1} alignContent="center">
    <Card>
      <Title title="سیستم دارو و تجهیزات بهداری شهید باهنر ناجا" />

      <CardContent>
        <Typography>

        سیستم دارو و تجهیزات بهداری شهید باهنر ناجا

        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Dashboard;
