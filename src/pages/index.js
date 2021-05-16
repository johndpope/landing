import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Button from "../components/Button";
import hero from "../images/hero.svg";
import heroMobile from "../images/hero_mobile.svg";

const useStyles = makeStyles({
  section: {
    marginBottom: "2rem",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 2,
  },
  overlayMobile: {
    position: "absolute",
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
    backgroundColor: "#FFC899",
    boxShadow: "none",
    borderRadius: "10px",
  },
  publisherCard: {
    padding: "2rem",
    backgroundColor: "#99E3FF",
    boxShadow: "none",
    borderRadius: "10px",
  },
});

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
              <img alt="" src={hero} className={classes.heroImg} />
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
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    className={classes.subtitleMobile}
                    gutterBottom
                  >
                    ---
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
            <img alt="" src={heroMobile} className={classes.heroImgMobile} />
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

        {/* Advertiser section */}
        <section className={classes.section}>
          <Card
            style={{
              backgroundColor: "#FFF1E5",
              boxShadow: "none",
              margin: 0,
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <Grid container direction="row" spacing={6}>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "left",
                    padding: "2rem",
                    display: "flex",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h1" color="textPrimary" gutterBottom>
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
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      href="https://docs.zesty.market/guides/advertisers"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container direction="column" spacing={6}>
                  <Grid item xs={12}>
                    <Card className={classes.advertiserCard}>
                      <Typography variant="h4" color="textPrimary" gutterBottom>
                        Foster Partnerships
                      </Typography>
                      <Typography variant="body1" color="textPrimary">
                        Form relationships early on with up-and-coming creators.
                        Build tangible reach beyond just numbers.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.advertiserCard}>
                      <Typography variant="h4" color="textPrimary" gutterBottom>
                        Reward Fans
                      </Typography>
                      <Typography variant="body1" color="textPrimary">
                        NFTs provide brands with rich engagement data 
                        and opportunities to reward the most loyal.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.advertiserCard}>
                      <Typography variant="h4" color="textPrimary" gutterBottom>
                        Community Targeting
                      </Typography>
                      <Typography variant="body1" color="textPrimary">
                        We don't need to collect intrusive data as we help brands
                        target communities directly.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </section>

        {/* Creator section */}
        <section className={classes.section}>
          <Card
            style={{
              backgroundColor: "#C8F0FF",
              boxShadow: "none",
              margin: 0,
              padding: "2rem",
              borderRadius: "10px",
            }}
          >
            <Grid container direction="row-reverse" spacing={6}>
              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-end"
                  justify="center"
                  spacing={4}
                  style={{
                    textAlign: "right",
                    padding: "2rem",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h1" color="textSecondary" gutterBottom>
                      Creators
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Find sponsors and monetize without the middlemen
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      href="https://docs.zesty.market/guides/creators"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container direction="column" spacing={6}>
                  <Grid item xs={12}>
                    <Card className={classes.publisherCard}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        Easy Integration
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Add our plugins into your content seamlessly to monetize,
                        we're consistently building new software.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.publisherCard}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        True Ownership
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        NFTs allow you to truly own your content + find the 
                        best opportunities that maximize revenue and engagement.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.publisherCard}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        Guaranteed Payout
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Using smart contracts, we ensure that the funds are
                        available to pay out before the deal happens.
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
