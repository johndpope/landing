import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Button from "../components/Button";

const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: "2rem",
  },
  sectionCard: {

  },
  infoSection: {

  },
  overlay: {
    width: "100%",
    left: 0,
    top: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    zIndex: 2,
    minHeight: "700px",
    marginTop: "300px",
    marginBottom: "175px",
  },
  overlayMobile: {
    width: "100%",
    height: "100%",
    top: "-0.5rem",
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 2,
  },
  overlayContent: {
    width: "50%",
  },
  overlayContentMobile: {
    width: "90%",
  },
  heroImg: {
    width: "100%",
    marginLeft: "-8px",
  },
  heroImgMobile: {
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontSize: "40px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "18px",
  },
  headerMobile: {
    textAlign: "center",
    fontSize: "28px",
    paddingTop: "0.1em"
  },
  subtitleMobile: {
    textAlign: "center",
    fontSize: "12px",
  },
  heroButton: {
    margin: "1.35rem",
  },
  advertiserCard: {
    padding: "2rem",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "10px",
    textAlign: "center",
    width: "23rem",
  },
  '@media (max-width: 500px)': {
    creatorCardContainer: {
      display: 'contents',
    },
    infoCardContainer: {
      display: 'contents',
    },
  },
  creatorCard: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "10px",
    width: "23rem",
  },
  cardH1: {
    fontSize: "50px",
  },
  cardH2: {
    fontSize: "25px",
  },
  cardContent: {
    color: "#595959",
  },
  infoCard: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: "10px",
    width: "20rem",
  },
  infoBrandH1: {
    fontWeight: "400",
    textAlign: "left",
    width: "95vw",
  },
  infoBrandTitle: {
    color: "#FF7500",
    fontWeight: "800",
  },
  infoCreatorH1: {
    fontWeight: "400",
    textAlign: "right",
    width: "95vw",
  },

  infoCreatorTitle: {
    color: "#00A3FF",
    fontWeight: "800",
  },
  // grid: {
  //   width: "100%",
  //   margin: "0 auto",
  //   backgroundColor: "black",
  // },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Seo
        title="Welcome"
        keywords={["web3", "nft", "advertising", "marketplace", "webxr"]}
      />
      <Layout>
        {/* Hero section */}
        <section className={classes.section}>
          <Hidden smDown>
            <div>
              {/* <img alt="" src={hero} className={classes.heroImg} /> */}

              <div className={classes.overlay}>
                <div className={classes.overlayContent}>
                  <Typography
                    variant="h1"
                    color="textPrimary"
                    className={classes.header}
                    gutterBottom
                  >
                    Web3 Monetization <br />
                    For Internet Communities
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.subtitle}
                    gutterBottom
                  >
                    Say hello to a new way for creators to break free.
                  </Typography>
                </div>
                <div>
                  <Button
                    color="primary"
                    className={classes.heroButton}
                    href="https://app.zesty.market"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch App
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.heroButton}
                    href="https://docs.zesty.market"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Hidden>
          <Hidden mdUp>
            {/* <img alt="" src={heroMobile} className={classes.heroImgMobile} /> */}
            <div className={classes.overlayMobile}>
              <div className={classes.overlayContentMobile}>
                <Typography
                  variant="h1"
                  color="textPrimary"
                  className={classes.headerMobile}
                  gutterBottom
                >
                  Web3 Monetization <br />
                  For Internet Communities
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.subtitleMobile}
                  gutterBottom
                >
                  Say hello to a new way for creators to break free.
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.subtitleMobile}
                  gutterBottom
                >
                  ---
                </Typography>
              </div>
              <Button
                color="primary"
                className={classes.heroButton}
                href="https://app.zesty.market"
                target="_blank"
                rel="noreferrer"
              >
                Launch App
              </Button>
              <Button
                color="secondary"
                className={classes.heroButton}
                href="https://docs.zesty.market"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </Button>
            </div>
          </Hidden>
        </section>

        {/* Creator section */}
        <section className={classes.section}>
          <Card
            className={classes.sectionCard}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: 0,
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.cardH1}
                    >
                      Creators
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      Engage your audience and monetize without the middlemen
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={4} align="center">
                  <Grid className={classes.creatorCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.creatorCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Easy Integration
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        Add our plugins into your content seamlessly to
                        monetize, we're consistently building new software.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.creatorCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.creatorCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        True Ownership
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        NFTs allow you to truly own your content + find the best
                        opportunities that maximize revenue and engagement.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.creatorCardContainer} item xs={12} lg={4}>
                    <Card className={classes.creatorCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Guaranteed Payout
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        Using smart contracts, we ensure that the funds are
                        available to pay out before the deal happens.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="tertiary"
                      href="https://docs.zesty.market/guides/creators"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </section>

        {/* Advertiser section */}
        <section className={classes.section}>
          <Card
            className={classes.sectionCard}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              margin: 0,
              padding: "2rem",
              borderRadius: "10px",
              // width: "100%",
            }}
          >
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography
                      variant="h1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.cardH1}
                    >
                      Brands
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      Reach unique audiences to grow your business
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={4} align="center">
                  <Grid className={classes.creatorCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.advertiserCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Foster Partnerships
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        Form relationships early on with up-and-coming creators.
                        Build tangible reach beyond just numbers.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.creatorCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.advertiserCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Reward Fans
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        NFTs provide brands with rich engagement data and
                        opportunities to reward the most loyal.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.creatorCardContainer} item xs={12} lg={4}>
                    <Card className={classes.advertiserCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Community Targeting
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        We don't need to collect intrusive data as we help
                        brands target communities directly.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      href="https://docs.zesty.market/guides/creators"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </section>

        {/* Advertiser Info Section */}
        <section className={classes.section}>
          <div className={classes.overlayContent}>
            <Typography
              variant="h1"
              color="textPrimary"
              className={classes.infoBrandH1}
              gutterBottom
            >
              How it works for{" "}
              <span className={classes.infoBrandTitle}>Brands</span>
            </Typography>
          </div>
          <Card
            className={classes.infoSection}
            style={{
              backgroundColor: "#ede3da",
              boxShadow: "none",
              margin: "0 auto",
              padding: "4rem",
              borderRadius: "5px",
            }}
          >
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "left",
                    padding: "1rem",
                  }}
                ></Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={4} align="center">
                  <Grid className={classes.infoCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Find
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        Look through our marketplace of digital space rental
                        opportunites
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.infoCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Bid
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        When you see an ad spot that you like, make an offer.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.infoCardContainer} item xs={12} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Advertise
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        If you win the bid, you'll be able to place your ad in
                        during the time slot.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </section>

        {/* Creator Info Section */}
        <section className={classes.section}>
          <div className={classes.overlayContent}>
            <Typography
              variant="h1"
              color="textPrimary"
              className={classes.infoCreatorH1}
              gutterBottom
            >
              How it works for{" "}
              <span className={classes.infoCreatorTitle}>Creators</span>
            </Typography>
          </div>
          <Card
            className={classes.infoSection}
            style={{
              backgroundColor: "#ede3da",
              boxShadow: "none",
              margin: "0 auto",
              padding: "4rem",
              borderRadius: "5px",
            }}
          >
            <Grid container direction="column" spacing={6}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "left",
                    padding: "1rem",
                  }}
                ></Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" spacing={4} align="center">
                  <Grid className={classes.infoCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Mint
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        Mint an NFT that is a digital representation of
                        ownership of your space
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.infoCardContainer} item xs={12} md={6} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        List
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        List the NFT on the marketplace to allow advertisers to
                        bid.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid className={classes.infoCardContainer} item xs={12} lg={4}>
                    <Card className={classes.infoCard}>
                      <Typography
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                        className={classes.cardH2}
                      >
                        Collect
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.cardContent}
                      >
                        After the ad has been shown on your property, collect
                        the funds.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </section>
      </Layout>
    </main>
  );
};

export default IndexPage;
