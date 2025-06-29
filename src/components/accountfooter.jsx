import { Box } from '@chakra-ui/react';
import React from 'react';

const AccountFooter = () => (
  <Box textAlign="center" pt={4} pb={3} fontFamily="heading" fontSize={{ base: 'xs', sm: 'sm' }} color="gunmetal">
    <span>
      2004 - 2025
    </span>
    © GT Savings Bank. All rights reserved.
  </Box>
);

export default AccountFooter;
