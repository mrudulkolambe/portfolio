const imgs = ["https://framerusercontent.com/images/UBcgJtsbwOAPFFDLBuFRJvN0.svg","https://framerusercontent.com/images/OOn03nNGE5DlY7rGmj8AIC0ekU.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/K1Pah26r6isrMs9kCxb8ZH7BCc0.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/Wzr3pw7gHNK7mIxshdQqGCiSeas.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/ofNm8lgo7dAQ6INfSyGf3pRLor8.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/pWnyWbSLaOXRIu2gmjo18aL9N0.svg","https://framerusercontent.com/images/mQLSghVTBGgyh4OPYsKwXX9yM.png","https://framerusercontent.com/images/eJMYs74n0yRjcpdYKjAxliCXDlQ.png","https://framerusercontent.com/images/wLSO4z5iliyhTJfcHFUjcXuq5OI.png","https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png","https://framerusercontent.com/images/Pm2OIQCQc5ieTs7Ukm016IqTqnc.png","https://framerusercontent.com/images/RYFFL8WYeEwNzr54qln8NqGZw.png","https://framerusercontent.com/images/mQLSghVTBGgyh4OPYsKwXX9yM.png","https://framerusercontent.com/images/eJMYs74n0yRjcpdYKjAxliCXDlQ.png","https://framerusercontent.com/images/wLSO4z5iliyhTJfcHFUjcXuq5OI.png","https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png","https://framerusercontent.com/images/Pm2OIQCQc5ieTs7Ukm016IqTqnc.png","https://framerusercontent.com/images/RYFFL8WYeEwNzr54qln8NqGZw.png","https://framerusercontent.com/images/mQLSghVTBGgyh4OPYsKwXX9yM.png","https://framerusercontent.com/images/eJMYs74n0yRjcpdYKjAxliCXDlQ.png","https://framerusercontent.com/images/wLSO4z5iliyhTJfcHFUjcXuq5OI.png","https://framerusercontent.com/images/h0bHFfufoXohXyRRUZq1vePOgM.png","https://framerusercontent.com/images/Pm2OIQCQc5ieTs7Ukm016IqTqnc.png","https://framerusercontent.com/images/RYFFL8WYeEwNzr54qln8NqGZw.png","https://framerusercontent.com/images/jacjITjmU0DoMreUZALWPAiyqhU.svg","https://framerusercontent.com/images/OsWJpH6lavja2Nn28QhDLbUvJUE.svg","https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/OsWJpH6lavja2Nn28QhDLbUvJUE.svg","https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/OsWJpH6lavja2Nn28QhDLbUvJUE.svg","https://framerusercontent.com/images/8m3vpxwjPd9KqJSt4RmKKimrU0E.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/xtsP8KVQWmIewRMMsjKlmup80E.svg","https://framerusercontent.com/images/K0GyKmUd5AYGiDaHRl8NpjNEgeE.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/xtsP8KVQWmIewRMMsjKlmup80E.svg","https://framerusercontent.com/images/K0GyKmUd5AYGiDaHRl8NpjNEgeE.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/xtsP8KVQWmIewRMMsjKlmup80E.svg","https://framerusercontent.com/images/K0GyKmUd5AYGiDaHRl8NpjNEgeE.svg","https://framerusercontent.com/images/IwOSC4S31EI3KciESEuApPpqc.svg","https://framerusercontent.com/images/TtE1Ucrq3H5xVwYxH1lG8IiWM.svg","https://framerusercontent.com/images/3g2Cba5ZQlYmKnSN67kVjWlItTk.svg","https://framerusercontent.com/images/BwWdTTsCmCvWVRIwVB2vLrPGY.svg","https://framerusercontent.com/images/qwgsLRrKEdTUOWnmRQWb0Utxdh8.png","https://framerusercontent.com/images/4bpiI4DNA2evKSZnbpGpxUMCNC0.svg","https://framerusercontent.com/images/LnINChddZ7WxbcCRF4yX3pY30.svg","https://framerusercontent.com/images/Je0bncWlBPyemX1nWwnHkgx7Pd4.svg","https://framerusercontent.com/images/oT8R3yT3QObEqWbS7g0bAjsEjk.svg","https://framerusercontent.com/images/V64g4UWIAg65XrBSBVWBN8ZlI.svg","https://framerusercontent.com/images/XuLSzLC1W0MEx1tX6UiWRrGwsQ.svg","https://framerusercontent.com/images/zr11FpnutRZXbPLLyBlAwdp7vQ.svg","https://framerusercontent.com/images/HI0c5zorTrsi3FIimQpAMAm29U.svg","https://framerusercontent.com/images/Noy5SjiQS1OWy3FZmUE4TGu45ZA.svg","https://framerusercontent.com/images/w40mStU6XBfbebFpC1gjS6NIA.svg","https://framerusercontent.com/images/7vrYe7VTTc2XSy3AOPnuzuajOA.svg","https://framerusercontent.com/images/CDqorljWdJmtULdYZxbtdnnpj0.svg","https://framerusercontent.com/images/5bcID1UKtntZmlf4rsaZU31IE.svg","https://framerusercontent.com/images/aW0xNADs8X2QBVsGT0VbrgTA64.svg","https://framerusercontent.com/images/t0soqDYOiaROpi8XSzXhP2d2gVU.svg","https://framerusercontent.com/images/7vrYe7VTTc2XSy3AOPnuzuajOA.svg","https://framerusercontent.com/images/CDqorljWdJmtULdYZxbtdnnpj0.svg","https://framerusercontent.com/images/5bcID1UKtntZmlf4rsaZU31IE.svg","https://framerusercontent.com/images/aW0xNADs8X2QBVsGT0VbrgTA64.svg","https://framerusercontent.com/images/t0soqDYOiaROpi8XSzXhP2d2gVU.svg","https://framerusercontent.com/images/7vrYe7VTTc2XSy3AOPnuzuajOA.svg","https://framerusercontent.com/images/CDqorljWdJmtULdYZxbtdnnpj0.svg","https://framerusercontent.com/images/5bcID1UKtntZmlf4rsaZU31IE.svg","https://framerusercontent.com/images/aW0xNADs8X2QBVsGT0VbrgTA64.svg","https://framerusercontent.com/images/t0soqDYOiaROpi8XSzXhP2d2gVU.svg","https://framerusercontent.com/images/7vrYe7VTTc2XSy3AOPnuzuajOA.svg","https://framerusercontent.com/images/CDqorljWdJmtULdYZxbtdnnpj0.svg","https://framerusercontent.com/images/5bcID1UKtntZmlf4rsaZU31IE.svg","https://framerusercontent.com/images/aW0xNADs8X2QBVsGT0VbrgTA64.svg","https://framerusercontent.com/images/t0soqDYOiaROpi8XSzXhP2d2gVU.svg","https://framerusercontent.com/images/jXsn6XCWU4mgtnlQBShNl1d3Xw.svg","https://framerusercontent.com/images/885L0MF23C3tfdXCVM4QPO0EQmg.svg","https://framerusercontent.com/images/Xiw4znuZlvTsrPlqoWamnisdDA.svg","https://framerusercontent.com/images/I9WCEqRVYrpIao1kY90NLM3ef4E.svg","https://framerusercontent.com/images/fDPx9ZliO06Q3Pc9vLg5CQCAMGU.svg","https://framerusercontent.com/images/jXsn6XCWU4mgtnlQBShNl1d3Xw.svg","https://framerusercontent.com/images/885L0MF23C3tfdXCVM4QPO0EQmg.svg","https://framerusercontent.com/images/Xiw4znuZlvTsrPlqoWamnisdDA.svg","https://framerusercontent.com/images/I9WCEqRVYrpIao1kY90NLM3ef4E.svg","https://framerusercontent.com/images/fDPx9ZliO06Q3Pc9vLg5CQCAMGU.svg","https://framerusercontent.com/images/jXsn6XCWU4mgtnlQBShNl1d3Xw.svg","https://framerusercontent.com/images/885L0MF23C3tfdXCVM4QPO0EQmg.svg","https://framerusercontent.com/images/Xiw4znuZlvTsrPlqoWamnisdDA.svg","https://framerusercontent.com/images/I9WCEqRVYrpIao1kY90NLM3ef4E.svg","https://framerusercontent.com/images/fDPx9ZliO06Q3Pc9vLg5CQCAMGU.svg","https://framerusercontent.com/images/jXsn6XCWU4mgtnlQBShNl1d3Xw.svg","https://framerusercontent.com/images/885L0MF23C3tfdXCVM4QPO0EQmg.svg","https://framerusercontent.com/images/Xiw4znuZlvTsrPlqoWamnisdDA.svg","https://framerusercontent.com/images/I9WCEqRVYrpIao1kY90NLM3ef4E.svg","https://framerusercontent.com/images/fDPx9ZliO06Q3Pc9vLg5CQCAMGU.svg","https://framerusercontent.com/images/DA2ntLBrnMTMATZ9YGNSceTqhY.svg","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/eSpKKfJmYVvAPFbGJQAJ5XRn8FE.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/5CJw29IANeoZMtGZ1ADBTCfg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/YH7RqbX8MBbAjCz6CzC4PzS7lCg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/Z6jN7LpUEhLhZgierlSggRqOkqg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/eSpKKfJmYVvAPFbGJQAJ5XRn8FE.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/5CJw29IANeoZMtGZ1ADBTCfg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/YH7RqbX8MBbAjCz6CzC4PzS7lCg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/Z6jN7LpUEhLhZgierlSggRqOkqg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/eSpKKfJmYVvAPFbGJQAJ5XRn8FE.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/5CJw29IANeoZMtGZ1ADBTCfg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/YH7RqbX8MBbAjCz6CzC4PzS7lCg.png","https://framerusercontent.com/images/zEDo9MV7s3PrOYrTHIn0LZle5Y.svg","https://framerusercontent.com/images/Z6jN7LpUEhLhZgierlSggRqOkqg.png","https://framerusercontent.com/images/sLqaFTUqaRxZE3NDOW5UBvaw.svg","https://framerusercontent.com/images/1T0QC3LeQ3V4l7797MOyLkfjLg.svg","https://framerusercontent.com/images/VbClbr6IpnfOIpgpqALPBgmZcA.svg","https://framerusercontent.com/images/OsWVeranOhMLRzn5z8laB2vI6b4.svg","https://framerusercontent.com/images/HMSzDHzbSdFSiKJtLrgiPY70S3s.svg","https://framerusercontent.com/images/Iq5ccz0kgd5Cpk7dFaxPKRtk.svg","https://framerusercontent.com/images/0vhyMwtblVaa7PxizFESpz2nQ.svg","https://framerusercontent.com/images/hkfUpw762MHnL3zUhjcmbswdk.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/KShAuJGlJT3gKlP3U7qAKXdIw.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/cKpPPh92KzrcERv5MNOVmrY1h0.svg","https://framerusercontent.com/images/rbjLs5E9OAFmj40dHBQlVXz5ii4.svg","https://framerusercontent.com/images/RNhprVgPRIRYVpd0baDySQLMk.svg","https://framerusercontent.com/images/4rZDKWUuqRB6ULj5HSwlfav8tZg.svg","https://framerusercontent.com/images/1i79OSogPnkvzpCkZ3nqdP1UKWY.svg","https://framerusercontent.com/images/PZqyEuP2ZmCRLsC2QbggdPwKM4.png"]


export default imgs;