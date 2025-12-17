import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function MaintenancePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 🔐 Check if popup already shown
    const hasSeenPopup = localStorage.getItem("ncfb_first_visit");

    if (!hasSeenPopup) {
      setOpen(true); // first time → show popup
      localStorage.setItem("ncfb_first_visit", "true");
    }
  }, []);

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Important Notice</DialogTitle>

      <DialogContent>
        <Typography sx={{ mb: 2 }}>
          The official website <strong>ncfb.in</strong> is currently under
          maintenance and will be live very soon.
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
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={() => setOpen(false)}
        >
          OK, I Understand
        </Button>
      </DialogContent>
    </Dialog>
  );
}
