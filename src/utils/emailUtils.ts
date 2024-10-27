export const sendWelcomeEmail = async (email: string, businessName: string) => {
  try {
    // TODO: Replace with actual email service implementation
    console.log(`Welcome email sent to ${email} for business: ${businessName}`);
    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return false;
  }
};