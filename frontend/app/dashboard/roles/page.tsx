import { roleColumns } from '@/components/tables/columns/role-columns';
import GenericTable from '@/components/tables/custom-table';
import { Box } from '@mui/material';
import React from 'react'

const Role = () => {
    return (
      <Box>
        <GenericTable
          columns={roleColumns}
          maxHeight="470px"
          title="Add Role"
          fetchUrl="/api/user/role"
          queryKey="role"
        />
      </Box>
    );
}

export default Role