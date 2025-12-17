import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function MaintenancePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup only once per browser
    const seen = localStorage.getItem("ncfb_maintenance_seen");
    if (!seen) {
      setOpen(true);
      localStorage.setItem("ncfb_maintenance_seen", "true");
    }
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
      <DialogTitle>Important Notice</DialogTitle>

      <DialogContent>
        <Typography sx={{ mb: 2 }}>
          The official website <strong>ncfb.in</strong> is currently under maintenance
          and will be live very soon.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Member verification services will be available only after the website
          is officially live.
        </Typography>

        <Typography sx={{ fontSize: 14 }}>
          📞 +91-7668897003 <br />
          📧 ncfbfoundation@gmail.com
        </Typography>

        <Button
          onClick={() => setOpen(false)}
          variant="contained"
          sx={{ mt: 3 }}
          fullWidth
        >
          OK, I Understand
        </Button>
      </DialogContent>
    </Dialog>
  );
}
