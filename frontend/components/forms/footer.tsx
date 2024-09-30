import { Box, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import { Facebook, LinkedIn, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ marginBottom: '10px' }}>
        &copy; 2024 Pizza All Rights Reserved.
      </Typography>

      {/* Social Media Icons */}
      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        <IconButton href="https://facebook.com" target="_blank">
          <Facebook sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank">
          <LinkedIn sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank">
          <Instagram sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton href="https://youtube.com" target="_blank">
          <YouTube sx={{ color: '#fff' }} />
        </IconButton>
      </Box>

      <Typography variant="body2">
        <Link href="/terms" passHref>
          <Typography variant="body2" sx={{ color: '#fff', textDecoration: 'underline' }}>
            Terms & Conditions
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
