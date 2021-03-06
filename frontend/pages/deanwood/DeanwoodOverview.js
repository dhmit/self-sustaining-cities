import React, {useState} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import * as PropTypes from "prop-types";
import DeanwoodNav from "./DeanwoodNav";
import MapDeanwood from "../../components/maps/MapDeanwood";
import Citation from "../../components/global/Citation";
import deanwood_1907 from "../../images/deanwood/Deanwood1907_composite.jpg";
import deanwood_1921 from "../../images/deanwood/Deanwood1921_composite.jpg";
import children from "../../images/deanwood/wy-048909.jpg";
import veggie_movie from "../../images/deanwood/veggies.mp4";

export const DeanwoodOverview = ({
                                     resources,
                                     census_boundary,
                                     deanwood_boundary,
                                     ward7_boundary
                                 }) => {
    const [show1921, setShow1921] = useState(false);
    const switchYear = () => {
        setShow1921(!show1921);
    };
    return (
        <Container className="city" id="deanwood-overview">
            <Row>
                <Col lg={3} className="nav-col p-0 mr-2">
                    <h1>Self-Sufficient City Deanwood, District of Columbia</h1>
                    <p>
                        Racial discrimination in access to housing, jobs, finance and health
                        care has left a lasting mark on the US urban landscape. In Boston in
                        2015, the average White family’s assets amounted to $247,500. The
                        average Black family’s assets totaled all of $8.00—the price of two
                        McDonald’s happy meals
                        <a className={"citation-pointer"}
                           title="$8: The Complicated Story Behind One Of
                               The Most Repeated Statistics About Boston."
                           href={"#source-1"}>[1]</a>
                        We set out in this digital history lab to figure out at the neighborhood
                        level how this great gap in wealth occurred. We selected a
                        historically-Black neighborhood in Washington, DC called Deanwood. We
                        gathered a lot of data—census records, data on housing, taxes, health,
                        commerce and community services. We found a surprising story of
                        unprogress. The longer the twentieth century stretched, the worse the
                        nieghborhood faired.
                        Here is that story.
                    </p>
                    <DeanwoodNav selected={"overview"} resources={resources}/>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="column">
                    <p>
                        In the early 1920s, developers in Washington, DC bought up farms
                        on land across the Anacostia River from the city center,
                        territory that was newly incorporated into the city. The
                        developers divided the farm land into small plots and sold them.
                        At that time, Washington city leaders were expelling African
                        American citizens from alley houses and housing deemed
                        substandard in Georgetown and other central DC neighborhoods.
                        <a className={"citation-pointer"}
                           title="Musgrove, Chocolate City (2014)."
                           href={"#source-2"}>[2]</a>
                        Displaced, many Black residents moved to the new development in
                        Deanwood. Migrants from the sharecropping south also settled
                        across the Anacostia River. In this way, an intergrated city
                        became segregated.

                    </p>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="column mb-4">
                    <h4>{show1921 ? "1921" : "1907"} Deanwood Map
                        <button className={"community-button"} onClick={switchYear}>{
                            show1921 ? "Show the 1907 map" : "Show the 1921 map"
                        }</button>
                    </h4>

                    <Image className={`${show1921 ? "map-hidden" : "map-shown"}`}
                           src={deanwood_1907} fluid/>
                    <Image className={`${show1921 ? "map-shown" : "map-hidden"}`}
                           src={deanwood_1921} fluid/>
                    {show1921 ? <small>Above, a student's composite map from 1921 Baist's
                            real estate atlas of surveys of Washington.<a
                                className={"citation-pointer"}
                                title={"Baist, G. Wm, Wm. E Baist, and H. V Baist. " +
                                "Baist's real estate atlas of surveys of Washington, " +
                                "District of Columbia: complete in four volumes. " +
                                "[Philadelphia: G.W. Baist, to 1921, 1919] Map."}
                                href={"#source-4"}>[4]</a></small>
                        : <small>Above, a student's composite map from 1907 Baist's
                            real estate atlas of surveys of Washington.<a
                                className={"citation-pointer"}
                                title={"Baist, G. Wm, Wm. E Baist, and H. V Baist. Baist's " +
                                "real estate atlas of surveys of Washington, " +
                                "District of Columbia: complete in four volumes. " +
                                "Philadelphia: G.W. Baist, 1907."}
                                href={"#source-3"}>[3]</a></small>
                    }

                </Col>

                <Col lg={4}/>
                <Col lg={4} className="mt-3 column">
                    <Image src={children} fluid
                           alt={"Three Black children smiling, standing in front of a dilapidated house outside of\n" +
                           "                        Deanwood (Marshall Heights)."}/>
                    <small>John P. Wymer's photograph showing three Black children smiling, standing
                        in front of a dilapidated house
                        outside of Deanwood (Marshall Heights). <a
                            href={"http://dchistory.pastperfectonline.com/" +
                            "photo/763BE269-A519-44FF-A89F-849312590250"}>(source)</a>.</small>
                </Col>
                <Col lg={4} className="mt-sm-4 mt-lg-0">
                    <blockquote className="mb-2">
                        "You had no decent jobs. <mark>It was understood that Negroes had an
                        inferior
                        status, and that was it."</mark>
                    </blockquote>
                    <p>
                        As in many historically Black neighborhoods, Deanwood residents
                        had trouble finding regular employment. Long-standing patterns
                        of discrimination banned Black citizens from most wage jobs and
                        increasingly from spending time in non-Black sections of the
                        city. The highest ambition, Anita Blake remembered, was to get a
                        job at the US Mint. The lowest level government jobs were open
                        to Black people.<a className={"citation-pointer"}
                                           title={"Anita Blake and Irene Donnelly, " +
                                           "Anacostia Oral History Project: 16."}
                                           href={"#source-5"}>[5]</a>
                        As Normal Dale remembered in 1975, “You had no
                        decent jobs. It was understood that Negroes had an inferior
                        status, and that was it.”
                        <a className={"citation-pointer"} href={"#source-6"}
                           title={"Norman E. Dale, Anacostia Oral History Project," +
                           " 1975, survey instrument 4-197071, tape #13, " +
                           "John Kinard Collection JK Book, " +
                           "Transcriptions Oral Histories, box 37, ACM archives."}>
                            [6]
                        </a>
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="mt-4">

                    <p>
                        Despite high rates of unemployment, census records from the
                        midst of the Great Depression show a remarkable fact. Among
                        Black residents of Deanwood, rates of homeowner occupancy, a
                        significant indicator of financial stability, were some of the
                        highest in the city (59% in 1940), far higher than the city
                        average for “Nonwhite” residents elsewhere (19%) or White
                        residents (33%) in the rest of the city.
                        <a className={"citation-pointer"}
                           title="United States Census Bureau. “Sixteenth census of
                                       the United States: 1940. Population and housing.”
                                       Hathi Trust. 1942."
                           href={"#source-7"}>[7]</a>
                        Black Deanwood residents managed to own their homes when most
                        White Americans could not afford them. How did Deanwood
                        residents manage to achieve the American dream of homeownership
                        when facing widespread discrimination?
                    </p>
                    <p>
                        Real estate records show that most buyers put money down—not on
                        one lot—but purchased from two to six lots, each were two-tenths
                        of an acre.<a className={"citation-pointer"}
                                      title="District of Columbia,
                                                  Property Records Search"
                                      href={"#source-8"}>[8]</a>

                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={3}>
                    <div className="embed-responsive embed-responsive-4by3">
                        <video className="video embed-responsive-item" loop autoPlay muted
                               controls>
                            <source src={veggie_movie} type="video/mp4"/>
                        </video>
                        <small>Archival footage of a DC farmer's market <a
                            href={"https://catalog.archives.gov/id/7095"}>(source)</a>.</small>
                    </div>
                </Col>
                <Col lg={4}>
                    <p>
                        After building a small house, residents, many of them former
                        farmers, used the rest of their land for chicken coops, kitchen
                        gardens, pig pens, and orchards. Black residents east of the
                        Anacostia River had no garbage collection and no sewers until
                        the 1950s. Residents remembered garbage wasn’t a problem. Pigs
                        roamed the ravines and stream beds, lined with fruit trees,
                        eating waste. Cooks fed food scraps to chickens. They composted
                        organic waste, human and animal manure.<a
                        className={"citation-pointer"}
                        title={"Anita Blake and Irene Donnelly, Anacostia Oral" +
                        " History Project, 1975, survey instrument 4-197071, tape #29."}
                        href={"#source-5"}>[5]</a>
                    </p>
                </Col>
                <Col lg={5}/>
                <Col lg={6} className="mt-4">
                    <p>
                        Children learned to garden at school
                        with their own vegetable beds.<a
                        className={"citation-pointer"}
                        title={"Elizabeth Barker, oral history interviews, " +
                        "1976-1981 OH-31 Schlesinger Library, Radcliff."}
                        href={"#source-9"}>[9]</a> Some grew more than enough food for
                        themselves. They sold them from their back doors or street
                        carts. Peddlers from Anacostia traded in fresh produce from hand
                        carts across the city.<a
                        className={"citation-pointer"}
                        title={"Ashanté Reese, Black Food Geographies: " +
                        "Race, Self-Reliance, and Food Access in Washington, D. C. " +
                        "(Chapel Hill,  University of North Carolina Press, 2019); " +
                        "42-3."}
                        href={"#source-10"}>[10]</a> As late as 1949, Deanwood had the
                        look and feel of a self-contained agricultural village, though
                        it existed inside city boundaries.
                    </p>
                    <p>
                        In the postwar decades, Deanwood did not flourish. Thanks to the
                        availability of government jobs, Black families made enough
                        money to buy good houses, but were barred from purchasing
                        housing financed with government-backed loans. From 1950 to
                        1960, 57,000 nonwhites arrived in the District of Columbia and
                        crammed into the limited inventory available to Black buyers and
                        tenants.<a
                        className={"citation-pointer"}
                        title="1960 Neighbors Inc DC Housing Report,
                                    “Housing in Washington, DC,” the United States Commission on
                                    Civil Rights, (Washington, DC: 1960)."
                        href={"#source-11"}>[11]</a> More people crowded into the same
                        small rooms. Housing
                        deteriorated. Rates of home-owner occupancy dropped.
                    </p>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="column mt-4">
                    <MapDeanwood censusBoundary={census_boundary}
                                 deanwoodBoundary={deanwood_boundary}
                                 ward7Boundary={ward7_boundary}
                                 mapStyle={"bw"}
                                 legend={[["rgb(0,89,255)", "Deanwood boundary"],
                                     ["rgb(241,138,255)", "Census tract 78 boundary"],
                                     ["rgb(255,115,0)", "Ward 7 boundary"]]}
                                 zoom={12} position={[38.88, -76.925919]}/>
                    <small>This map shows the boundaries used for student research.</small>
                </Col>
                <Col lg={4}/>
                <Col lg={8} className="mt-5 column">
                    <h2>Sources</h2>
                    <Citation
                        identifier={"source-1"}
                        title={"$8: The Complicated Story Behind One Of " +
                        "The Most Repeated Statistics About Boston."}
                        accessed={"Accessed April 8, 2022."}
                        link={"https://www.wbur.org/news/2021/07/08/greater-boston-black-families-net-worth"}
                    />
                    <Citation identifier={"source-2"}
                              title={"Musgrove, Chocolate City (2014)."}/>
                    <Citation identifier={"source-3"}
                              link={"https://www.loc.gov/resource/g3851bm.gct00132d/?sp=17"}
                              title={"Baist, G. Wm, Wm. E Baist, and H. V Baist. Baist's " +
                              "real estate atlas of surveys of Washington, " +
                              "District of Columbia: complete in four volumes. " +
                              "Philadelphia: G.W. Baist, 1907."}/>
                    <Citation identifier={"source-4"}
                              link={"https://www.loc.gov/resource/g3851bm.gct00135d/?sp=16"}
                              title={"Baist, G. Wm, Wm. E Baist, and H. V Baist. " +
                              "Baist's real estate atlas of surveys of Washington, " +
                              "District of Columbia: complete in four volumes. " +
                              "[Philadelphia: G.W. Baist, to 1921, 1919] Map."}/>
                    <Citation identifier={"source-5"}
                              title={"Anita Blake and Irene Donnelly, " +
                              "Anacostia Oral History Project: 16."}/>
                    <Citation identifier={"source-6"}
                              title={"Norman E. Dale, Anacostia Oral History Project, 1975, " +
                              "survey instrument 4-197071, tape #13, " +
                              "John Kinard Collection JK Book, Transcriptions Oral Histories," +
                              " box 37, ACM archives."}/>
                    <Citation identifier={"source-7"}
                              title={"United States Census Bureau. “Sixteenth census of the" +
                              " United States: 1940. Population and housing.” " +
                              "Hathi Trust. 1942."}
                              link={"https://babel.hathitrust.org/cgi/pt?" +
                              "id=mdp.39015019193161&view=1up&seq=638"}/>
                    <Citation identifier={"source-8"}
                              title={"District of Columbia, Property Records Search,"}
                              link={"https://register.shelby.tn.us/search/index.php"}/>
                    <Citation identifier={"source-9"}
                              title={"Elizabeth Barker, oral history interviews, 1976-1981" +
                              " OH-31 Schlesinger Library, Radcliff."}/>
                    <Citation identifier={"source-10"}
                              title={"Ashanté Reese, Black Food Geographies: Race, " +
                              "Self-Reliance, and Food Access in Washington, " +
                              "D. C. (Chapel Hill,  " +
                              "University of North Carolina Press, 2019); 42-3."}/>
                    <Citation identifier={"source-11"} title={"1960 Neighbors Inc DC Housing" +
                    " Report, “Housing in Washington, DC,” the United States " +
                    "Commission on Civil Rights, (Washington, DC: 1960)."}/>
                </Col>
            </Row>
        </Container>
    );
};

DeanwoodOverview.propTypes = {
    resources: PropTypes.array,
    census_boundary: PropTypes.object,
    deanwood_boundary: PropTypes.object,
    ward7_boundary: PropTypes.object
};


export default DeanwoodOverview;
