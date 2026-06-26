import * as Sentry from "@sentry/nextjs";
import NextErrorComponent from "next/error";

const CustomError = ({ statusCode }) => <NextErrorComponent statusCode={statusCode} />;

CustomError.getInitialProps = async (ctx) => {
  await Sentry.captureUnderscoreErrorException(ctx);
  return NextErrorComponent.getInitialProps(ctx);
};

export default CustomError;
