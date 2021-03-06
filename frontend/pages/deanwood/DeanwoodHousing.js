import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import HousingMapWrapper from "../../components/maps/HousingMapWrapper";
import WymarHousing1 from "../../images/wy_043608.jpg";
import WymarHousing1_modern from "../../images/wy_043608_modern.jpg";
import WymarHousing2 from "../../images/wy_040108.jpg";
import WymarHousing2_modern from "../../images/wy_040108_modern.jpg";
import Lot_Historical_Image from "../../images/lot_historical_image.jpg";
import Lot_Modern_Image from "../../images/lot_modern_image.jpg";

import DeanwoodDeeds from "../../components/housing/DeanwoodDeeds";
import BrightwoodDeeds from "../../components/housing/BrightwoodDeeds";
import CensusChartsV2 from "../../components/charts/CensusChartsV2";
import Citation from "../../components/global/Citation";
import DeanwoodNav from "./DeanwoodNav";

export const DeanwoodHousing = ({resources, addresses}) => {

    return (
        <Container className="city" id="deanwood-housing">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
                    <h1>Deanwood Housing Changes Over Time</h1>
                    <p>
                        Deanwood is “a historically stable, self-reliant, self-sufficient and
                        close-knit primarily African-American community” (Bissinger 2007).
                        <a className={"citation-pointer"} title={"Kelly B. Bissinger, " +
                        "Conservation Districts: A Solution for the Deanwood Neighborhood?"}
                           href={"#source-1"}>[1]
                        </a>
                        The city has been described as “a place where store owners know their
                        customers by name, where residents spend their evenings sitting on porches
                        and where churchgoers fill the streets Sunday mornings on their way to one
                        of the community's more than 20 churches” (Washington Post, 1988).
                        <a className={"citation-pointer"} title={"Rene M. Lynch, DEANWOOD " +
                        "CLOSE-KNIT D.C. COMMUNITY"} href={"#source-2"}>[2]
                        </a>
                    </p>
                    <DeanwoodNav selected={"housing"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col sm={6} md={6} lg={4} className="p-0">
                    <Image className="img-wymer" src={WymarHousing1} fluid={true}/>
                    <small className="text-right"> Lee Street NE east of 50th Street.
                        March 27, 1949. Wymer, John P.&nbsp;
                        <a href={"http://dchistory.pastperfectonline.com/photo/" +
                        "53C29669-CB57-476D-B73F-928837661923"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0">
                    <Image className="img-wymer" src={WymarHousing1_modern} fluid={true}/>
                    <small className="text-right">Screengrab from "Return to Wymer's DC"
                        <a href={"http://map.wymersdc.com/#"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col lg={4}/>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={WymarHousing2} fluid={true}/>
                    <small className="text-right"> Oliver Street NE looking south from Quarles
                        Street. July 3, 1948. Wymer, John P.&nbsp;
                        <a href={"http://dchistory.pastperfectonline.com/" +
                        "photo/B1BDA745-9CBF-4996-B415-784547415709"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0 mt-4">
                    <Image className="img-wymer" src={WymarHousing2_modern} fluid={true}/>
                    <small className="text-right">Screengrab from "Return to Wymer's DC"&nbsp;
                        <a href={"http://map.wymersdc.com/#"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col lg={5} md={3}/>
                <Col lg={6} className="mt-4">
                    <p>
                        Typically, it was very difficult for African Americans to obtain home
                        loans since predominantly black districts were generally redlined.
                        Families living in the “red zone” did not qualify for government-backed
                        loans, and, thus, were unable to receive aid to purchase a home.
                        However, Deanwood provided homeownership opportunities for
                        African-Americans in Washington, where homes were sold and paid in
                        monthly installments. Many of the homes stayed in the family of the
                        original owners’ for several generations. This can be inferred through
                        the repeated $10 dollar transfers found in the Washington Record of
                        Deeds, signifying that homes’ ownership was passed down from parents to
                        their children. By keeping the home in the family, people saved on fees
                        normally associated with purchasing and selling homes such as realtor
                        fees. Although some still remain in the original families, with a recent
                        wave of gentrification in the neighborhood, more families have been
                        forced to sell their homes at lower prices than comparable communities.
                        Consequently, these families lose one of their biggest assets—their
                        home.
                    </p>
                    <h2>
                        The Issue of Gentrification
                    </h2>
                    <p>
                        With the recent rise in property values, and consequently property
                        taxes, it may not be feasible for many low-income residents to afford
                        to pay their property taxes and for low-income, minority buyers to
                        purchase a home. Responding to these gentrification pressures, a
                        Georgetown report proposes classifying Deanwood as a historical
                        district, stressing the importance of both preserving the homes in the
                        owners’ family line and maintaining affordable prices.
                    </p>
                    <p>
                        We looked into the Record of Deeds
                        <a className={"citation-pointer"} title={"Record of Deeds"}
                           href={"#source-5"}>[5]</a>
                        for various houses in Deanwood and
                        Brightwood over the years to examine in detail their change in prices.
                        For instance, we examine one specific lot, Lot 58 Square 5175, in Deanwood
                        from 1940 to 2020. As we can see from the images below, this lot remained
                        largely unchanged physically over the years, but its value has increased
                        over the years.
                    </p>
                </Col>
                <Col lg={4}/>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0">
                    <Image className="img-wymer" src={Lot_Historical_Image} fluid={true}/>
                    <small className="text-right"> Lot 58 Square 5175 of Deanwood, 1948. &nbsp;
                        <a href={"  http://dchistory.pastperfectonline.com/photo/" +
                        "9BB858CC-1A8F-4ABF-A8F6-573360342202"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} className="p-0">
                    <Image className="img-wymer" src={Lot_Modern_Image} fluid={true}/>
                    <small className="text-right">Screengrab from "Return to Wymer's DC"
                        &nbsp;<a href={"http://map.wymersdc.com/#WY0433"}>
                            (source)
                        </a>
                    </small>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="p-0 mt-5">
                    <h2 className="p-0">
                        Deanwood Lots: value by year
                    </h2>
                    <DeanwoodDeeds/>
                    <p>
                        In the tables above, each instance that we see an exchange of $10 or $0
                        of a lot, this usually indicates that the house was transferred from
                        within the family, such as from parent to child. This illustrates
                        instances of gentrification, as we can see houses in Deanwood that have
                        remained in the family for decades, suddenly being sold for large amounts
                        of worth. This is a possible indication that the rising housing prices
                        made it unaffordable for families to continue living in their homes.
                    </p>
                    <h2>Map of Disappearing Households</h2>
                    <p>
                        In the map below, we track this phenomenon of houses that have remained
                        within the family for decades suddenly being sold for large amounts; in a
                        sense, a kind of "disappearance" of households.
                    </p>

                </Col>
                <Col lg={4}/>
                <Col lg={8} className="p-0 mb-4">
                    <HousingMapWrapper addresses={addresses}/>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="mt-5 p-0">
                    <h2>
                        Comparison between Deanwood and Brightwood
                    </h2>
                    <p>
                        Despite the rise in housing prices, Deanwood homes perform noticeably
                        worse than nearby communities in the housing market. We compared
                        Deanwood to Brightwood, a predominantly white neighborhood with houses
                        of comparable size and style, on the other side of the city.
                        Historically, houses in both neighborhoods remained in the family across
                        generations. However, when houses were sold, Brightwood’s selling price
                        was significantly higher than that Deanwood’s, with a median home value
                        of $665,000
                        <a className={"citation-pointer"} title={"Brightwood" +
                        " Housing Market"} href={"#source-3"}>[3]</a>
                        compared to Deanwood’s $391,740
                        <a className={"citation-pointer"} title={"Brightwood" +
                        " Housing Market"} href={"#source-4"}>[4]</a> . This signifies a 70%
                        difference in the price of houses of comparable sizes. Despite the high
                        selling value of Brightwood properties, the homes remain in the family,
                        meaning that owners are able to afford their taxes and the neighborhood
                        is not being gentrified.
                    </p>
                    <h2 className="p-0">
                        Brightwood Lots: value by year
                    </h2>
                    <BrightwoodDeeds/>
                </Col>
                <Col lg={4}/>

                <Col lg={6}>
                    <CensusChartsV2/>
                    <h2>
                        Similar instances of racism in housing practices
                    </h2>
                    <p>
                        A 2019 study found that non-white borrowers paid higher rates of
                        interest and faced more fees when buying. According to Berkeley
                        researcher Nancy Wallace, “a black homeowner with a $429,000 mortgage
                        would pay an average of $640 more over the life of the loan.”
                        <a className={"citation-pointer"} title={"KHRISTOPHER J. BROOKS," +
                        " Disparity in home lending costs"} href={"#source-6"}>[6]</a>
                        An MIT undergrad study similarly found that minority groups pay 8%
                        higher rates of interest than White buyers, and face 14% higher
                        rejection rates for
                        loans.<a className={"citation-pointer"} title={"Adam Zewe, Fighting" +
                    " discrimination in mortgage lending"} href={"#source-7"}>[7]</a>
                        Furthermore, a 2021 study from Freddie Mac found that 12.5 percent of
                        appraisals for home purchases in Black neighborhoods and 15.4 percent in
                        Latino neighborhoods came in below the contract price, compared with 7.4
                        percent of appraisals in White neighborhoods.<a
                        className={"citation-pointer"} title={"Racial and Ethnic Valuation" +
                    " Gaps in Home Purchase Appraisals"} href={"#source-8"}>[8]</a>
                        These studies show instances of racism in a wide variety of housing
                        practices, from higher interest rates, higher rejection rates for loans,
                        higher interest mortgages, and higher appraisals.
                    </p>
                </Col>
                <Col lg={4}/>
                <Col lg={8}>
                    <h2>Sources</h2>
                    <Citation identifier={"source-1"}
                              title={"Kelly B. Bissinger, Conservation Districts: A Solution" +
                              " for the Deanwood Neighborhood?"}
                              link={"https://repository.library.georgetown.edu/bitstream/" +
                              "handle/10822/761694/Kelly%20Bissinger.pdf?sequence=2&" +
                              "isAllowed=y"}/>
                    <Citation identifier={"source-2"}
                              title={"Rene M. Lynch, DEANWOOD CLOSE-KNIT D.C. COMMUNITY"}
                              link={"https://www.washingtonpost.com/archive/realestate/1988/" +
                              "08/06/deanwood-close-knit-dc-community/123ee1fd-0e29-" +
                              "4464-ae83-4c248282c034/"}/>
                    <Citation identifier={"source-3"}
                              title={"Brightwood Housing Market"}
                              link={"https://www.redfin.com/neighborhood/18375/DC/Washington" +
                              "-DC/Brightwood/housing-market"}/>
                    <Citation identifier={"source-4"}
                              title={"Deanwood Housing Market"}
                              link={"https://www.redfin.com/neighborhood/125450/DC/" +
                              "Washington-DC/Deanwood/housing-market"}/>
                    <Citation identifier={"source-5"}
                              title={"Record of Deeds"}
                              link={"https://countyfusion4.kofiletech.us/countyweb/loginDisplay.action?countyname=WashingtonDC"}/>
                    <Citation identifier={"source-6"}
                              title={"KHRISTOPHER J. BROOKS, Disparity in home lending costs" +
                              " minorities millions, researchers find"}
                              link={"https://www.cbsnews.com/news/mortgage-discrimination-black-and-latino-paying-millions-more-in-interest-study-shows/"}/>
                    <Citation identifier={"source-7"}
                              title={"Adam Zewe, Fighting discrimination in mortgage lending"}
                              link={"https://news.mit.edu/2022/machine-learning-model-discrimination-lending-0330"}/>
                    <Citation identifier={"source-8"}
                              title={"Racial and Ethnic Valuation Gaps in Home Purchase" +
                              " Appraisals"}
                              link={"https://www.freddiemac.com/fmac-resources/research/pdf/202109-Note-Appraisal-Gap.pdf"}/>
                    <Citation identifier={"source-8"}
                              title={"U.S. Decennial Census"}
                              link={"https://www.socialexplorer.com/explore-tables"}/>
                </Col></Row>
        </Container>)
        ;

};

DeanwoodHousing.propTypes = {
    resources: PropTypes.array,
    addresses: PropTypes.array
};


export default DeanwoodHousing;
