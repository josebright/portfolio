import Link from 'next/link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section>
      <Stack spacing={3} alignItems="flex-start" sx={{ maxWidth: 640 }}>
        <Typography variant="h1" component="h1">
          404
        </Typography>
        <Typography variant="h3" component="p">
          That page took a wrong turn.
        </Typography>
        <Typography color="text.secondary">
          The link may be broken or the page may have moved. Head back to safety.
        </Typography>
        <Button component={Link} href="/" variant="contained" color="primary" size="large">
          Back home
        </Button>
      </Stack>
    </Section>
  );
}
