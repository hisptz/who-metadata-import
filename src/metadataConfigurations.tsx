export interface MetadataConfig {
    type: "dashboard" | "tracker" | "aggregate";
    json: string;
}

export interface PackageConfig {
    dhis2Version: string;
    packageVersion: string;
    resources: string;
    metadata: MetadataConfig[];
}

export interface Package {
    title: string;
    description: string;
    config: PackageConfig[];
}

export interface Category {
    title: string;
    description: string;
    image: string;
    packages: Package[];
}

const categories: Category[] = [
    {
        title: "Immunization",
        description: "The World Health Organization (WHO), UNICEF, and Gavi, the Vaccine Alliance have partnered with DHIS2 to improve nationalimmunization coverage through better data collection, analysis and use. The DHIS2 Immunization Toolkit contains modular metadata packages that can be adopted together or separately according to national immunization program needs.",
        image: "https://dhis2.org/wp-content/uploads/package-Immunizatin.png",
        packages: [
            {
                title: "EPI",
                description: "DHIS2 metadata packages for EPI programs were developed to support the WHO Health Facility Analysis Guide for Immunization Programs.Dashboards are designed to support programmatic decision making   to increase immunization coverage and programmatic efficiencies.  Analyses include immunization coverage maps, dropout rates, health facility stock indicators, wastage rates, and cold chain monitoring.",
                config: [
                    {
                        dhis2Version: "2.39.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/expanded-programme-on-immunization-epi-aggregate/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "IMM_AGG_COMPLETE_1.0.0_DHIS2.39.json"
                            },
                            {
                                type: "dashboard",
                                json: "IMM_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.39.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.38.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/expanded-programme-on-immunization-epi-aggregate/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "IMM_AGG_COMPLETE_1.0.0_DHIS2.38.json"
                            },
                            {
                                type: "dashboard",
                                json: "IMM_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.38.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/expanded-programme-on-immunization-epi-aggregate/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "IMM_AGG_COMPLETE_1.0.0_DHIS2.37.json"
                            },
                            {
                                type: "dashboard",
                                json: "IMM_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.38.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/expanded-programme-on-immunization-epi-aggregate/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "IMM_AGG_COMPLETE_1.0.0_DHIS2.36.json"
                            },
                            {
                                type: "dashboard",
                                json: "IMM_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.38.json"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Triangulation Dashboard for Immunization Programmes",
                description: "Triangulation dashboards for immunization programmes synthesize data from across routine immunization, stock, case-based and aggregate surveillance data sources. The dashboard package provides practical examples of visualizations for data triangulation recommended by subject matter experts at CDC, UNICEF and WHO in the Triangulation for improved decision-making in immunization programs guidelines. This dashboard is modeled using standard recommended indicators from the Immunization and Integrated Disease Surveillance packages also available on this page.",
                config: [
                    {
                        dhis2Version: "2.38.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/immunization-triangulation-dashboard/overview.html",
                        metadata: [
                            {
                                type: "dashboard",
                                json: "IMM_TRI_COMPLETE_DASHBOARD_1.0.0_DHIS2.38.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/immunization-triangulation-dashboard/overview.html",
                        metadata: [
                            {
                                type: "dashboard",
                                json: "IMM_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.38.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/immunization-triangulation-dashboard/overview.html",
                        metadata: [
                            {
                                type: "dashboard",
                                json: "IMM_TRI_COMPLETE_DASHBOARD_1.0.0_DHIS2.36.json"
                            }
                        ]
                    },
                    
                ]
            },
            {
                title: " Adverse Events Following Immunization (AEFI) Tracker Package",
                description: "The AEFI tracker package supports the notification, reporting, investigation and analysis of adverse events following immunization. The package includes data collection forms for facility, district and national levels and standard dashboards for analysis. The package can be installed as stand-alone or used alongside the Immunization eRegistry.",
                config: [
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.1.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/adverse-events-following-immunization-aefi/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "IMM_AEFI_COMPLETE_1.1.0_DHIS2.36.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.35.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.35/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.35/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.34.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.34/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.34/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.33.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.33/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.33/metadata.json"
                            }
                        ]
                    },
                    
                ]
            },
            {
                title: " Immunization Registry",
                description: "Using the DHIS2 tracker model, an electronic immunization registry (EIR) was configured to improve completion of national immunization schedules, reduce under-immunized children, and enhance facility-level workflows for individual level tracking of children through immunization schedules. The electronic tracker also enhances the capability for linking individual vaccine records to adverse events investigations.The Immunization Registry tracker is designed based on the WHO Position Papers-Recommendations for Routine Immunization (2018) in collaboration with the Norwegian Institute of Public Health.",
                config: [
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.1.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/eir-immunization-eregistry/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "IMM_EIR_COMPLETE_1.1.0_DHIS2.36.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.35.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.1.0_DHIS2.35/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.1.0_DHIS2.35/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.34.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.1.0_DHIS2.34/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.1.0_DHIS2.34/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.33.0",
                        packageVersion: "1.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.0.0_DHIS2.33/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/EPI_EIR/EPI_EIR_TRK_V1.0.0_DHIS2.33/metadata.json"
                            }
                        ]
                    },
                    
                ]
            },

           
        ]
    },
    {
    title: "HIV",
        description: "Two standard aggregate configuration packages are available for HIV:a complete aggregate configuration package that includes data collection and dashboards, and a dashboard configuration package that includes dashboards only. In addition, an HIV case surveillance Tracker package is available.",
        image: "https://dhis2.org/wp-content/uploads/package-HIV.png",
        packages: [
            {
                title: "Aggregate HIV package",
                description: "The HIV dashboard packages include tailored analyses for national,district and facility data users accompanied by the WHO Analysis and Use of Facility Data for HIV Programme Managers.  The dashboard enables analysis along the cascade of interventions with benchmarks for reaching the 95-95-95 targets.    Routine facility level data forms and data elements are included to facilitate standardization of data collection,     including the use of a common logistics data framework for facility-level stock reporting.This package was developed in collaboration with the WHO Global HIV Programme with support from The Global Fund.",
                config: [
                    {
                        dhis2Version: "2.39.0",
                        packageVersion: "1.2.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/hiv/hiv-hmis/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "HIV_AGG_COMPLETE_1.2.1_DHIS2.39.json"
                            },
                            {
                                type: "dashboard",
                                json: "HIV_AGG_COMPLETE_DASHBOARD_1.2.1_DHIS2.39.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.38.0",
                        packageVersion: "1.2.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/hiv/hiv-hmis/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "HIV_AGG_COMPLETE_1.2.1_DHIS2.38.json"
                            },
                            {
                                type: "dashboard",
                                json: "HIV_AGG_COMPLETE_DASHBOARD_1.2.1_DHIS2.38.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.2.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/hiv/hiv-hmis/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "HIV_AGG_COMPLETE_1.2.1_DHIS2.37.json"
                            },
                            {
                                type: "dashboard",
                                json: "HIV_AGG_COMPLETE_DASHBOARD_1.2.1_DHIS2.37.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.2.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/hiv/hiv-hmis/overview.html",
                        metadata: [
                            {
                                type: "aggregate",
                                json: "HIV_AGG_COMPLETE_1.2.1_DHIS2.36.json"
                            },
                            {
                                type: "dashboard",
                                json: "HIV_AGG_COMPLETE_DASHBOARD_1.2.1_DHIS2.36.json"
                            }
                        ]
                    }
                ]
            },
            {
                title: "HIV case surveillance package",
                description: "The HIV Case surveillance package is designed to follow people living with HIV through their treatment. It records the sentinel events outlined in the WHO’s consolidated guidelines on person-centered HIV patient monitoring and case surveillance (2017) and the updated 2020 Consolidated HIV Strategic Information Guidelines: Driving Impact Through Programme Monitoring and Management.This package includes a Tracker program for recording of individual and longitudinal data on PLHIV, including antiretroviral therapy, viral load testing, and TB preventive therapy; a set of dashboards and indicators for users to monitor the local epidemic based on case surveillance data and programmatic needs; and an aggregate dataset to record the national HIV estimates. The dashboard enables analysis along the cascade of HIV treatment interventions with benchmarks for reaching the 95-95-95 targets.",
                config: [
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "0.1.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/hiv/hiv-case-surveillance/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/HIV_Tracker/HIV_CS_TRK_V1.0.0_DHIS2.36/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.35.0",
                        packageVersion: "0.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/HIV_Tracker/HIV_CS_TRK_V1.0.0_DHIS2.35/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/HIV_Tracker/HIV_CS_TRK_V1.0.0_DHIS2.35/metadata.json"
                            }
                        ]
                    },
                    {
                        dhis2Version: "2.34.0",
                        packageVersion: "0.1.0",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/HIV_Tracker/HIV_CS_TRK_V1.0.0_DHIS2.34/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/HIV_Tracker/HIV_CS_TRK_V1.0.0_DHIS2.34/metadata.json"
                            }
                        ]
                    },
                    
                ]
            }
        ]
    },
    {
    title: "Malaria",
    description: "The malaria toolkit for DHIS2 contains packages that support routine reporting and analysis of malaria cases, treatment, stock and preventative intervention data from public facilities, private facilities and community sources. The packages support countries across the spectrum of transmission and can be deployed at sub-national levels according to national stratification of burden reduction and elimination-targeted settings.",
    image: "https://dhis2.org/wp-content/uploads/package-Malaria.png",
    packages: [
        {
            title: "Malaria HMIS",
            description: "The aggregate malaria module is optimized for routine reporting and analysis within an integrated HMIS. The package contains the following components, which can be implemented according to context and national stratification:",
            config: [
                {
                    dhis2Version: "2.39.0",
                    packageVersion: "2.1.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-hmis/overview.html",
                    metadata: [
                        {
                            type: "aggregate",
                            json: "MAL_AGG_BR_2.1.0_DHIS2.39.json"
                        },
                        {
                            type: "dashboard",
                            json: "MAL_AGG_BR_DASHBOARD_2.1.0_DHIS2.39.json"
                        }
                    ]
                },
                {
                    dhis2Version: "2.38.0",
                    packageVersion: "2.1.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-hmis/overview.html",
                    metadata: [
                        {
                            type: "aggregate",
                            json: "MAL_AGG_BR_2.1.0_DHIS2.38.json"
                        },
                        {
                            type: "dashboard",
                            json: "MAL_AGG_BR_DASHBOARD_2.1.0_DHIS2.38.json"
                        }
                    ]
                },
                {
                    dhis2Version: "2.37.0",
                    packageVersion: "2.1.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-hmis/overview.html",
                    metadata: [
                        {
                            type: "aggregate",
                            json: "MAL_AGG_BR_2.1.0_DHIS2.37.json"
                        },
                        {
                            type: "dashboard",
                            json: "MAL_AGG_BR_DASHBOARD_2.1.0_DHIS2.37.json"
                        }
                    ]
                },
                {
                    dhis2Version: "2.37.0",
                    packageVersion: "2.0.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-hmis/overview.html",
                    metadata: [
                        {
                            type: "aggregate",
                            json: "MAL_AGG_BR_2.0.0_DHIS2.37.json"
                        },
                        {
                            type: "dashboard",
                            json: "MAL_AGG_BR_DASHBOARD_2.0.0_DHIS2.37.json"
                        }
                    ]
                },
                {
                    dhis2Version: "2.36.0",
                    packageVersion: "2.1.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-hmis/overview.html",
                    metadata: [
                        {
                            type: "aggregate",
                            json: "MAL_AGG_BR_2.1.0_DHIS2.36.json"
                        },
                        {
                            type: "dashboard",
                            json: "MAL_AGG_BR_DASHBOARD_2.1.0_DHIS2.36.json"
                        }
                    ]
                },
                
            ]
        },
        {
            title: "Malaria Surveillance: Case & Foci Trackers",
            description: "The Malaria Elimination Case Surveillance & Foci Investigation package supports the Global technical strategy for malaria of transforming surveillance into a core intervention. The malaria surveillance tracker package contains two tracker programs that support critical workflows for improving surveillance activities in elimination-targeted geographies:Case notification, investigation & classification ,Foci investigation, classification & response. The package supports countries to implement the recommendations contained in the WHO Malaria Surveillance, Monitoring & evaluation: a reference manual (2018). The design allows for cases to be linked to foci and analyzed on a map; and optimizes decentralized workflows where data collection and reporting may be carried out by numerous actors at health facility, district surveillance officer or national program level. The package was developed with support from the Bill & Melinda Gates Foundation, with technical leadership provided by the WHO Global Malaria Programme and inputs from the Digital Solutions for Malaria Elimination Community of Practice.",
            config: [
                {
                    dhis2Version: "2.39.0",
                    packageVersion: "1.0.1",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-surveillance/overview.html",
                    metadata: [
                        {
                            type: "tracker",
                            json: "MAL_CS_COMPLETE_1.0.1_DHIS2.39.json"
                        },
                    ]
                },
                {
                    dhis2Version: "2.38.0",
                    packageVersion: "1.0.1",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-surveillance/overview.html",
                    metadata: [
                        {
                            type: "tracker",
                            json: "MAL_CS_COMPLETE_1.0.1_DHIS2.38.json"
                        },
                    ]
                },
                {
                    dhis2Version: "2.37.0",
                    packageVersion: "1.0.1",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-surveillance/overview.html",
                    metadata: [
                        {
                            type: "tracker",
                            json: "MAL_CS_COMPLETE_1.0.1_DHIS2.37.json"
                        },
                    ]
                },
                {
                    dhis2Version: "2.36.0",
                    packageVersion: "1.0.0",
                    resources: "https://docs.dhis2.org/en/topics/metadata/malaria/malaria-surveillance/overview.html",
                    metadata: [
                        {
                            type: "tracker",
                            json: "MAL_CS_COMPLETE_1.0.1_DHIS2.36.json"
                        },
                    ]
                },
                
            ]
        }
    ]
    },
    
    {
            title: "Tuberculosis (TB)",
            description: "Metadata packages for TB programmes contain modular components to support case notification, treatment outcomes, prevention activities, drug resistance monitoring, and monitoring stock levels at service delivery sites. Two tracker packages support individual level data collection that link lab results with clinical case data for routine TB case surveillance and conducting Drug Resistance Surveys.",
            image: "https://dhis2.org/wp-content/uploads/package-TB.png",
            packages: [
                {
                    title: "TB aggregate package",
                    description: "The aggregate TB package supports routine data collection from health facilities and household prevention activities, and dashboards optimized for monitoring programme performance within an integrated HMIS. The aggregate package was developed with technical leadership from the WHO Global TB Programme with support from The Global Fund. It includes the following components: TB notifications and treatment outcomes ,TB logistics data (health facility reporting), TB prevention (household contact tracing), TB Laboratory",
                    config: [
                        {
                            dhis2Version: "2.40.0",
                            packageVersion: "1.5.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.5.0_DHIS2.40.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.5.0_DHIS2.40.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.39.0",
                            packageVersion: "1.5.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.5.0_DHIS2.39.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.5.0_DHIS2.39.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.39.0",
                            packageVersion: "1.4.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.4.1_DHIS2.39.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.4.1_DHIS2.39.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.38.0",
                            packageVersion: "1.5.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.5.0_DHIS2.38.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.5.0_DHIS2.38.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.38.0",
                            packageVersion: "1.4.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.4.1_DHIS2.38.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.4.1_DHIS2.38.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.37.0",
                            packageVersion: "1.4.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.4.1_DHIS2.37.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.4.1_DHIS2.37.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "1.4.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-hmis/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_AGG_COMPLETE_1.4.1_DHIS2.36.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_AGG_COMPLETE_DASHBOARD_1.4.1_DHIS2.36.json"
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title: "TB-COVID-19 Impact Assessment",
                    description: "In early 2021, a new partnership between the Robert Koch Institute (RKI), the West and Central African network for TB Research (WARN/CARN TB), the Special Programme for Research and Training in Tropical Diseases (TDR) and the Global TB Programme at WHO was established to strengthen the capacity of national TB programmes (NTPs) in West and Central Africa to monitor and mitigate the impact of COVID-19 and future Public Health Emergencies (PHEs) on TB service provision.As a result, an impact assessment framework has been developed which outlines a common methodology to monitor and evaluate the impact of COVID-19 and future PHE on TB service provision across different epidemiological and process indicators. The framework is designed to strengthen routine TB surveillance by NTPs and to facilitate the identification and implementation of appropriate mitigation strategies to ensure the continued functionality of TB services during periods of significant disruption.The DHIS2 TB – COVID-19 Impact Assessment package has been designed to identify the core activities undertaken by TB programmes and to conduct a risk assessment with hypotheses about the potential points of disruption due to COVID-19 or other future PHEs and their consequences. For each possible disruption, one or more indicators have been developed to enable the measurement and monitoring of the potential impact of COVID-19.",
                    config: [
                        {
                            dhis2Version: "2.39.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-covid-19-impact-assessment/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_IMPAX_COMPLETE_1.0.1_DHIS2.39.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_IMPAX_COMPLETE_DASHBOARD_1.0.1_DHIS2.39.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.38.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-covid-19-impact-assessment/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_IMPAX_COMPLETE_1.0.1_DHIS2.38.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_IMPAX_COMPLETE_DASHBOARD_1.0.1_DHIS2.39.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.37.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-covid-19-impact-assessment/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_IMPAX_COMPLETE_1.0.1_DHIS2.37.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_IMPAX_COMPLETE_DASHBOARD_1.0.1_DHIS2.37.json"
                                }
                            ]
                        },
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-covid-19-impact-assessment/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "TB_IMPAX_COMPLETE_1.0.1_DHIS2.36.json"
                                },
                                {
                                    type: "dashboard",
                                    json: "TB_IMPAX_COMPLETE_DASHBOARD_1.0.1_DHIS2.36.json"
                                }
                            ]
                        },
                        
                    ]
                },
                {
                    title: "TB Case Surveillance",
                    description: "The TB case surveillance package is a DHIS2 tracker program configuration that supports individual-level, longitudinal data collection and program indicators.",
                    config: [
                        {
                            dhis2Version: "2.39.0",
                            packageVersion: "2.0.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TB_CS_COMPLETE_2.0.0_DHIS2.39.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.38.0",
                            packageVersion: "2.0.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TB_CS_COMPLETE_2.0.0_DHIS2.38.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.37.0",
                            packageVersion: "2.0.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TB_CS_COMPLETE_2.0.0_DHIS2.37.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "2.0.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TB_CS_COMPLETE_2.0.0_DHIS2.36.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TBCS00_1.0.1_DHIS2.36.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.35.0",
                            packageVersion: "1.0.1",
                            resources: "https://docs.dhis2.org/en/topics/metadata/tuberculosis/tb-case-surveillance/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "TBCS00_1.0.1_DHIS2.35.json"
                                },
                            ]
                        },
                        
                    ]
                }
            ]
            },
            {
                title: "Integrated Disease Surveillance",
                description: "The integrated disease surveillance strategy has been adopted widely in recent decades to promote rational and efficient use of resources by streamlining common surveillance activities and functions (WHO).",
                image: "https://dhis2.org/wp-content/uploads/package-VPD.png",
                packages: [
                    {
                        title: "Integrated Disease Surveillance (IDS) Aggregate Package",
                        description: "The aggregate integrated disease surveillance (IDS) package was developed in partnership with WHO Health Emergencies Programme and WHO Regional Office for Africa to strengthen surveillance of epidemic-prone diseases in an integrated disease surveillance system. The integrated disease surveillance strategy has been adopted widely in recent decades to promote rational and efficient use of resources by streamlining common surveillance activities and functions (WHO). The IDS package provides a reference for integrated reporting forms for suspected cases, confirmed cases and suspected deaths for 15 typically notifiable diseases and conditions. Pre-configured dashboards and outbreak alerts facilitate timely notification of possible disease outbreaks when used as a decentralized weekly reporting system. This package is designed to complement vaccine-preventable and other integrated case-based disease surveillance tracker programs.",
                        config: [
                            {
                                dhis2Version: "2.39.0",
                                packageVersion: "1.2.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/ids-aggregate/overview.html",
                                metadata: [
                                    {
                                        type: "aggregate",
                                        json: "IDS_AGG_COMPLETE_1.2.0_DHIS2.39.json"
                                    },
                                    {
                                        type: "dashboard",
                                        json: "IDS_AGG_COMPLETE_DASHBOARD_1.2.0_DHIS2.39.json"
                                    }
                                ]
                            },
                            
                            {
                                dhis2Version: "2.38.0",
                                packageVersion: "1.2.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/ids-aggregate/overview.html",
                                metadata: [
                                    {
                                        type: "aggregate",
                                        json: "IDS_AGG_COMPLETE_1.2.0_DHIS2.39.json"
                                    },
                                    {
                                        type: "dashboard",
                                        json: "IDS_AGG_COMPLETE_DASHBOARD_1.2.0_DHIS2.38.json"
                                    }
                                ]
                            },
                            {
                                dhis2Version: "2.37.0",
                                packageVersion: "1.2.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/ids-aggregate/overview.html",
                                metadata: [
                                    {
                                        type: "aggregate",
                                        json: "IDS_AGG_COMPLETE_1.2.0_DHIS2.37.json"
                                    },
                                    {
                                        type: "dashboard",
                                        json: "IDS_AGG_COMPLETE_DASHBOARD_1.2.0_DHIS2.37.json"
                                    }
                                ]
                            },
                            {
                                dhis2Version: "2.36.0",
                                packageVersion: "1.2.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/ids-aggregate/overview.html",
                                metadata: [
                                    {
                                        type: "aggregate",
                                        json: "IDS_AGG_COMPLETE_1.2.0_DHIS2.36.json"
                                    },
                                    {
                                        type: "dashboard",
                                        json: "IDS_AGG_COMPLETE_DASHBOARD_1.2.0_DHIS2.36.json"
                                    }
                                ]
                            },
                            
                        ]
                    },
                    {
                        title: "Vaccine preventable disease (VPD) case surveillance",
                        description: "The vaccine preventable disease (VPD) case surveillance Tracker program supports case-based reporting of nine (9) commonly notifiable diseases, analysis and alerts. Diseases covered include Congenital Rubella Syndrome (CRS), Invasive Bacterial Vaccine Preventable Disease (IBVPD), Measles/Rubella (MR), Meningitis, Neonatal Tetanus, Polio (Acute Flaccid Paralysis), Rotavirus, Rotavirus Impact and Yellow Fever. The program links clinical, laboratory, case investigation and case outcome data to a case, and can facilitate centralized or centralized reporting flows. Dashboards support analysis across diseases. The program is intended for implementation alongside the IDSR package.",
                        config: [
                            {
                                dhis2Version: "2.37.0",
                                packageVersion: "1.1.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/vpd-case-surveillance/overview.html",
                                metadata: [
                                    {
                                        type: "tracker",
                                        json: "VPD_CS_COMPLETE_1.1.0_DHIS2.37.json"
                                    }
                                ]
                            },
                            {
                                dhis2Version: "2.36.0",
                                packageVersion: "1.0.1",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/vpd-case-surveillance/overview.html",
                                metadata: [
                                    {
                                        type: "tracker",
                                        json: "VPD_CS_COMPLETE_1.1.0_DHIS2.36.json"
                                    }
                                ]
                            }, 
                        ]
                    },
                    {
                        title: "Acute Febrile Illness (AFI) Toolkit",
                        description: "The Acute Febrile Illness (AFI) Toolkit enables the electronic capture of individual/case-based surveillance data from the point of care.The predefined dashboards allow the analysis at national and subnational level on the monitoring of AFI suspected and confirmed cases, trends, pathogens patterns, and quality of the data collected.The toolkit was developed in partnership with CDC’s Division of Global Health Protection (DGHP) Global Epidemiology, Laboratory, and Surveillance Branch (GELSB).",
                        config: [
                            {
                                dhis2Version: "2.39.0",
                                packageVersion: "1.0.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/acute-febrile-illness/overview.html",
                                metadata: [
                                    {
                                        type: "tracker",
                                        json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.39.json"
                                    },
                                ]
                            },
                            {
                                dhis2Version: "2.38.0",
                                packageVersion: "1.0.0",
                                resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/acute-febrile-illness/overview.html",
                                metadata: [
                                    {
                                        type: "tracker",
                                        json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.38.json"
                                    },
                                ]
                            }, 
                        ]
                    }
                ]
                },
                {
                    title: "Community Health Information Systems (CHIS)",
                    description: "The Community Health Information System (CHIS) package for DHIS2 is a modular tool designed to enhance community-based health programs, to monitor their impact, and to make evidence-based policy adjustments according to the real needs of the targeted communities.",
                    image: "https://dhis2.org/wp-content/uploads/package-CHIS.png",
                    packages: [
                        {
                            title: "Community Health Information Systems (CHIS)",
                            description: "The Community Health Information System (CHIS) package for DHIS2 is a modular tool designed to enhance community-based health programs, to monitor their impact, and to make evidence-based policy adjustments according to the real needs of the targeted communities. As the types of services that community health workers provide in communities are highly heterogeneous across countries, the modular approach allows for more flexibility as it can be modified for in-country use according to the maturity level of the CHIS and the selection of indicators as part of the national community health monitoring framework. The aggregate/dashboard packages for CHIS are designed to optimize the integration of community-based health services data in the national HMIS, increasing visibility, access, analysis and use of these data for health program planning.",
                            config: [
                                {
                                    dhis2Version: "2.39.0",
                                    packageVersion: "	1.0.1",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "CHIS_AGG_AH_1.0.1_DHIS2.39.json"
                                        },
                                        {
                                            type: "dashboard",
                                            json: "CHIS_AGG_AH_DASHBOARD_1.0.1_DHIS2.39.json"
                                        },
                                    ]
                                },
                                {
                                    dhis2Version: "2.38.0",
                                    packageVersion: "	1.0.1",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "CHIS_AGG_AH_1.0.1_DHIS2.38.json"
                                        },
                                        {
                                            type: "dashboard",
                                            json: "CHIS_AGG_AH_DASHBOARD_1.0.1_DHIS2.38.json"
                                        },
                                    ]
                                },
                                {
                                    dhis2Version: "2.37.0",
                                    packageVersion: "	1.0.1",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "CHIS_AGG_AH_1.0.1_DHIS2.37.json"
                                        },
                                        {
                                            type: "dashboard",
                                            json: "CHIS_AGG_AH_DASHBOARD_1.0.1_DHIS2.37.json"
                                        },
                                    ]
                                },
                                {
                                    dhis2Version: "2.36.0",
                                    packageVersion: "1.0.0",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "CHIS_AGG_AH_1.0.1_DHIS2.36.json"
                                        },
                                        {
                                            type: "dashboard",
                                            json: "CHIS_AGG_AH_DASHBOARD_1.0.1_DHIS2.36.json"
                                        },
                                    ]
                                },
                                {
                                    dhis2Version: "2.35.0",
                                    packageVersion: "1.0.0",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "https://github.com/dhis2-metadata/CHIS-AGG-Community_Health_Information_System/tree/D2.35/1.0.0"
                                        },
                                        
                                    ]
                                },
                                {
                                    dhis2Version: "2.34.0",
                                    packageVersion: "1.0.0",
                                    resources: "https://docs.dhis2.org/en/topics/metadata/chis-community-health-information-system/overview.html",
                                    metadata: [
                                        {
                                            type: "aggregate",
                                            json: "https://github.com/dhis2-metadata/CHIS-AGG-Community_Health_Information_System/tree/D2.34/1.0.0"
                                        },
                                        
                                    ]
                                },   
                            ]
                        },   
                    ]
                    },
                    {
                        title: "COVID Vaccine Delivery",
                        description: "As part of the COVID-19 vaccine delivery toolkit, the following metadata packages are available for installation in national systems: COVID-19 Electronic Immunization Registry (EIR) [tracker] and two standard aggregate configuration packages for COVID-19 Vaccination Core Analysis & Datasets: a complete aggregate configuration package that includes data collection and dashboards, and a dashboard configuration package that includes dashboards only. In addition, a AEFI (Adverse Events Following Immunization) Tracker package is available.",
                        image: "https://dhis2.org/wp-content/uploads/package-CovidVaccine.png",
                        packages: [
                            {
                                title: "COVID-19 Electronic Immunization Registry (EIR)",
                                description: "The EIR for COVID-19 vaccines uses the tracker data model to facilitate the registration, vaccination and longitudinal tracking of individuals. This package includes workflow support such as notifications and working lists to ensure that individuals complete a multi-dose regimen. The program includes program indicators that enable aggregate reporting of individual level data according to WHO’s recommendations for monitoring vaccine delivery.",
                                config: [
                                    {
                                        dhis2Version: "2.39.0",
                                        packageVersion: "	1.2.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covid-19-electronic-immunization-registry/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "CVC_EIR_COMPLETE_1.2.0_DHIS2.39.json"
                                            },
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.38.0",
                                        packageVersion: "	1.2.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covid-19-electronic-immunization-registry/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "CVC_EIR_COMPLETE_1.2.0_DHIS2.38.json"
                                            },
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.37.0",
                                        packageVersion: "	1.2.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covid-19-electronic-immunization-registry/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "CVC_EIR_COMPLETE_1.2.0_DHIS2.37.json"
                                            },
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.36.0",
                                        packageVersion: "1.2.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covid-19-electronic-immunization-registry/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "CVC_EIR_COMPLETE_1.2.0_DHIS2.36.json"
                                            },
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.35.0",
                                        packageVersion: "1.2.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covid-19-electronic-immunization-registry/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "CVC_EIR_COMPLETE_1.2.0_DHIS2.35.json"
                                            },
                                        ]
                                    },   
                                ]
                            },
                            {
                                title: "COVID-19 Vaccination Core Analysis & Datasets",
                                description: "The aggregate COVID-19 vaccination package includes datasets, standard indicators and dashboards aligned to the WHO’s monitoring guidance for COVID-19 vaccine deployment.This package can be used for aggregate reporting directly from vaccination sites or at higher levels. It also supports the aggregation of data for analysis where hybrid paper-based and electronic systems are used. For example, individual level data from DHIS2 tracker or other frontline health worker apps can be pushed to these datasets to enable monitoring of complete datasets across the country.",
                                config: [
                                    {
                                        dhis2Version: "2.39.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covac-aggregate/overview.html",
                                        metadata: [
                                            {
                                                type: "aggregate",
                                                json: "CVC_AGG_COMPLETE_1.1.0_DHIS2.39.json"
                                            },
                                            {
                                                type: "dashboard",
                                                json: "CVC_AGG_COMPLETE_DASHBOARD_1.1.0_DHIS2.39.json"
                                            }
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.38.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covac-aggregate/overview.html",
                                        metadata: [
                                            {
                                                type: "aggregate",
                                                json: "CVC_AGG_COMPLETE_1.1.0_DHIS2.38.json"
                                            },
                                            {
                                                type: "dashboard",
                                                json: "CVC_AGG_COMPLETE_DASHBOARD_1.1.0_DHIS2.38.json"
                                            }
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.37.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-vaccine-delivery/covac-aggregate/overview.html",
                                        metadata: [
                                            {
                                                type: "aggregate",
                                                json: "CVC_AGG_COMPLETE_1.1.0_DHIS2.37.json"
                                            },
                                            {
                                                type: "dashboard",
                                                json: "CVC_AGG_COMPLETE_DASHBOARD_1.1.0_DHIS2.37.json"
                                            }
                                        ]
                                    },
                                    
                                ]
                            },
                            {
                                title: "Adverse Events Following Immunization (AEFI) Tracker Package",
                                description: "The AEFI tracker package supports the notification, reporting, investigation and analysis of adverse events following immunization. The package includes data collection forms for facility, district and national levels and standard dashboards for analysis. The package can be installed as stand-alone or used alongside the Immunization eRegistry.",
                                config: [
                                    {
                                        dhis2Version: "2.36.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://docs.dhis2.org/en/topics/metadata/immunization/adverse-events-following-immunization-aefi/overview.html",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "IMM_AEFI_COMPLETE_1.1.0_DHIS2.36.json"
                                            },
                                        ]
                                    },
                                    {
                                        dhis2Version: "2.35.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.35/reference.xlsx",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.35/metadata.json"
                                            },
                                        ]
                                    }, 
                                    {
                                        dhis2Version: "2.34.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.34/reference.xlsx",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.34/metadata.json"
                                            },
                                        ]
                                    }, 
                                    {
                                        dhis2Version: "2.33.0",
                                        packageVersion: "1.1.0",
                                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.33/reference.xlsx",
                                        metadata: [
                                            {
                                                type: "tracker",
                                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/AEFI/AEFI_TRACKER_V1_DHIS2.33/metadata.json"
                                            },
                                        ]
                                    }, 
                                ]
                            },
                            
                        ]
                        },
                        {
                            title: "COVID-19 Surveillance",
                            description: "Two COVID-19 Tracker packages are available: COVID-19 Case-based surveillance and Contact Tracing programs [tracker], Ports of Entry screening & follow-up program [tracker] (discontinued). In addition, two standard aggregate configuration packages are available for COVID-19: a complete aggregate configuration package that includes data collection and dashboards, and a dashboard configuration package that includes dashboards only.",
                            image: "https://dhis2.org/wp-content/uploads/package-Covid.png",
                            packages: [
                                {
                                    title: "COVID-19 Case-based surveillance and Contact Tracing programs",
                                    description: "Enrolls & tracks suspected cases; captures symptoms, demographics, risk factors & exposures; creates lab requests; links confirmed cases with contacts; and monitors patient outcomes. This package can be installed as a standalone COVID-19 package or can be integrated into a country’s existing integrated disease surveillance & response tracker. The contact registration and follow up program strengthens active case detection through contact tracing activities, such as identification and follow-up of contacts of a suspected or confirmed COVID-19 case. These two programs are packaged together, but you can choose to install one or the other.",
                                    config: [
                                        {
                                            dhis2Version: "2.37.0",
                                            packageVersion: "1.0.2",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "C19_CS_COMPLETE_1.0.2_DHIS2.37.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.36.0",
                                            packageVersion: "1.0.2",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "C19_CS_COMPLETE_1.0.2_DHIS2.36.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.36.0",
                                            packageVersion: "1.0.1",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/work-in-progress/metadata/COVID19/COVID19_TRACKER_V1_DHIS2.36/metadata.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.35.0",
                                            packageVersion: "1.0.1",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/work-in-progress/metadata/COVID19/COVID19_TRACKER_V1_DHIS2.35/metadata.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.33.0",
                                            packageVersion: "0.3.3",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/work-in-progress/metadata/COVID19/COVID19_TRACKER_V1_DHIS2.33/metadata.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.33.0",
                                            packageVersion: "0.3.3 - Français",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/work-in-progress/metadata/COVID19/COVID19_TRACKER_V1_DHIS2.33/metadata_fr.json"
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    title: "Vaccine preventable disease (VPD) case surveillance",
                                    description: "The vaccine preventable disease (VPD) case surveillance Tracker program supports case-based reporting of nine (9) commonly notifiable diseases, analysis and alerts. Diseases covered include Congenital Rubella Syndrome (CRS), Invasive Bacterial Vaccine Preventable Disease (IBVPD), Measles/Rubella (MR), Meningitis, Neonatal Tetanus, Polio (Acute Flaccid Paralysis), Rotavirus, Rotavirus Impact and Yellow Fever. The program links clinical, laboratory, case investigation and case outcome data to a case, and can facilitate centralized or centralized reporting flows. Dashboards support analysis across diseases. The program is intended for implementation alongside the IDSR package.",
                                    config: [
                                        {
                                            dhis2Version: "2.37.0",
                                            packageVersion: "1.1.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/vpd-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "VPD_CS_COMPLETE_1.1.0_DHIS2.37.json"
                                                }
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.36.0",
                                            packageVersion: "1.0.1",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/vpd-case-surveillance/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "VPD_CS_COMPLETE_1.1.0_DHIS2.36.json"
                                                }
                                            ]
                                        }, 
                                    ]
                                },
                                {
                                    title: "Acute Febrile Illness (AFI) Toolkit",
                                    description: "The Acute Febrile Illness (AFI) Toolkit enables the electronic capture of individual/case-based surveillance data from the point of care.The predefined dashboards allow the analysis at national and subnational level on the monitoring of AFI suspected and confirmed cases, trends, pathogens patterns, and quality of the data collected.The toolkit was developed in partnership with CDC’s Division of Global Health Protection (DGHP) Global Epidemiology, Laboratory, and Surveillance Branch (GELSB).",
                                    config: [
                                        {
                                            dhis2Version: "2.39.0",
                                            packageVersion: "1.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/acute-febrile-illness/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.39.json"
                                                },
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.38.0",
                                            packageVersion: "1.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/disease-surveillance/acute-febrile-illness/overview.html",
                                            metadata: [
                                                {
                                                    type: "tracker",
                                                    json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.38.json"
                                                },
                                            ]
                                        }, 
                                    ]
                                },
                                {
                                    title: "COVID-19 Aggregate Surveillance",
                                    description: "An aggregate reporting dataset that captures minimum necessary data points for daily or weekly reporting.",
                                    config: [
                                        {
                                            dhis2Version: "2.39.0",
                                            packageVersion: "2.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-aggregate/overview.html",
                                            metadata: [
                                                {
                                                    type: "aggregate",
                                                    json: "C19_AGG_COMPLETE_2.0.0_DHIS2.39.json"
                                                },
                                                {
                                                    type: "dashboard",
                                                    json: "C19_AGG_COMPLETE_DASHBOARD_2.0.0_DHIS2.39.json"
                                                }
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.38.0",
                                            packageVersion: "2.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-aggregate/overview.html",
                                            metadata: [
                                                {
                                                    type: "aggregate",
                                                    json: "C19_AGG_COMPLETE_2.0.0_DHIS2.38.json"
                                                },
                                                {
                                                    type: "dashboard",
                                                    json: "C19_AGG_COMPLETE_DASHBOARD_2.0.0_DHIS2.38.json"
                                                }
                                            ]
                                        }, 
                                        {
                                            dhis2Version: "2.37.0",
                                            packageVersion: "2.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-aggregate/overview.html",
                                            metadata: [
                                                {
                                                    type: "aggregate",
                                                    json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.37.json"
                                                },
                                                {
                                                    type: "dashboard",
                                                    json: "C19_AGG_COMPLETE_DASHBOARD_2.0.0_DHIS2.37.json"
                                                }
                                            ]
                                        },
                                        {
                                            dhis2Version: "2.36.0",
                                            packageVersion: "2.0.0",
                                            resources: "https://docs.dhis2.org/en/topics/metadata/covid-19-surveillance/covid-19-aggregate/overview.html",
                                            metadata: [
                                                {
                                                    type: "aggregate",
                                                    json: "IDS_AFI_COMPLETE_1.0.0_DHIS2.36.json"
                                                },
                                                {
                                                    type: "dashboard",
                                                    json: "C19_AGG_COMPLETE_DASHBOARD_2.0.0_DHIS2.36.json"
                                                }
                                            ]
                                        }, 
                                    ]
                                }
                            ]
                            },
                            {
                                title: "Nutrition Aggregate Package",
                                description: "The nutrition package supports the integration, capture and analysis of routine nutrition data in national DHIS2-based systems. The package supports aggregate data collection from facilities, community-based interventions and mass event activities (such as Vitamin A supplement campaigns).",
                                image: "https://dhis2.org/wp-content/uploads/package-nutrition.png",
                                packages: [
                                    {
                                        title: "Nutrition Aggregate Package",
                                        description: "The nutrition package supports the integration, capture and analysis of routine nutrition data in national DHIS2-based systems. The package supports aggregate data collection from facilities, community-based interventions and mass event activities (such as Vitamin A supplement campaigns). The package covers the following health interventions: vitamin A/IFA supplementation, infant and young child feeding, maternal counseling, growth monitoring & promotion, and wasting. Dashboards are designed to facilitate analysis of nutrition indicators from health facilities and community-based interventions, with further guidance provided on how to triangulate these data with components of the WHO-approved CHIS metadata package.The package was developed in collaboration with UNICEF and is intended as a practical tool to accompany UNICEF’s nutrition information systems guidelines.",
                                        config: [
                                            {
                                                dhis2Version: "2.39.0",
                                                packageVersion: "1.0.2",
                                                resources: "https://docs.dhis2.org/en/topics/metadata/nutrition/nutrition-aggregate/overview.html",
                                                metadata: [
                                                    {
                                                        type: "aggregate",
                                                        json: "NUTR_AGG_COMPLETE_1.0.2_DHIS2.39.json"
                                                    },
                                                    {
                                                        type: "dashboard",
                                                        json: "NUTR_AGG_COMPLETE_DASHBOARD_1.0.2_DHIS2.39.json"
                                                    },
                                                ]
                                            },
                                            {
                                                dhis2Version: "2.38.0",
                                                packageVersion: "1.0.2",
                                                resources: "https://docs.dhis2.org/en/topics/metadata/nutrition/nutrition-aggregate/overview.html",
                                                metadata: [
                                                    {
                                                        type: "aggregate",
                                                        json: "NUTR_AGG_COMPLETE_1.0.2_DHIS2.38.json"
                                                    },
                                                    {
                                                        type: "dashboard",
                                                        json: "NUTR_AGG_COMPLETE_DASHBOARD_1.0.2_DHIS2.38.json"
                                                    },
                                                ]
                                            },
                                            {
                                                dhis2Version: "2.37.0",
                                                packageVersion: "1.0.2",
                                                resources: "https://docs.dhis2.org/en/topics/metadata/nutrition/nutrition-aggregate/overview.html",
                                                metadata: [
                                                    {
                                                        type: "aggregate",
                                                        json: "NUTR_AGG_COMPLETE_1.0.2_DHIS2.37.json"
                                                    },
                                                    {
                                                        type: "dashboard",
                                                        json: "NUTR_AGG_COMPLETE_DASHBOARD_1.0.2_DHIS2.37.json"
                                                    },
                                                ]
                                            },
                                            {
                                                dhis2Version: "2.36.0",
                                                packageVersion: "1.0.1",
                                                resources: "https://docs.dhis2.org/en/topics/metadata/nutrition/nutrition-aggregate/overview.html",
                                                metadata: [
                                                    {
                                                        type: "aggregate",
                                                        json: "NUTR_AGG_COMPLETE_1.0.1_DHIS2.36.json"
                                                    },
                                                    {
                                                        type: "dashboard",
                                                        json: "NUTR_AGG_COMPLETE_DASHBOARD_1.0.1_DHIS2.36.json"
                                                    },
                                                ]
                                            },
                                            {
                                                dhis2Version: "2.35.0",
                                                packageVersion: "1.0.0",
                                                resources: "https://docs.dhis2.org/en/topics/metadata/nutrition/nutrition-aggregate/overview.html",
                                                metadata: [
                                                    {
                                                        type: "aggregate",
                                                        json: "NUTR_AGG_COMPLETE_1.0.0_DHIS2.35.json"
                                                    },
                                                    {
                                                        type: "dashboard",
                                                        json: "NUTR_AGG_COMPLETE_DASHBOARD_1.0.0_DHIS2.35.json"
                                                    },
                                                ]
                                                    
                                                
                                            },
                                           
                                        ]
                                    },   
                                ]
                                },
      {
        title: "Civil Registration & Vital Statistics (CRVS) and Mortality",
        description: "Taken together or separately, these modular packages help strengthen national capacity for generating complete vital statistics and analyzing the leading causes of death within a population. A Vital Events (VE) Notification package is available to facilitate reporting of vital events from health facilities such as birth, stillbirths, and death to the national CRVS. ",
        image: "https://dhis2.org/wp-content/uploads/package-Mortality.png",
        packages: [
            {
                title: "Vital Events Notification",
                description: "The Vital Events (VE) Tracker is a tool designed to expand coverage of the reporting of vital events from health facilities such as birth, stillbirths, and death to the national CRVS. The VE tracker program allows triggering of real time notifications directly from the point of care. Notifications alone will not replace the official National CRVS or the legal framework of implementing countries, but it is expected to improve and strengthen the foundation of a reliable demographic statistical repository that provides key denominator data for many health performance indicators in the HMIS such as vaccination coverage.This package was developed with UNICEF in support of Health Sector Contributions Towards Improving The Civil Registration of Births and Deaths in Low-Income Countries with support from Gavi. Watch our short video overview for more information on this package.",
                config: [
                    {
                        dhis2Version: "2.39.0",
                        packageVersion: "1.1.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_VE_COMPLETE_1.1.1_DHIS2.39.json"
                            },
                            
                        ]
                    },
                    {
                        dhis2Version: "2.38.0",
                        packageVersion: "1.1.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_VE_COMPLETE_1.1.1_DHIS2.38.json"
                            },
                        ]
                    },
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.1.1",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_VE_COMPLETE_1.1.1_DHIS2.37.json"
                            },    
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.1.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_VE_COMPLETE_1.1.0_DHIS2.36.json"
                            },  
                        ]
                    },
                    {
                        dhis2Version: "2.35.0",
                        packageVersion: "1.1.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_VE_COMPLETE_1.1.0_DHIS2.35.json"
                            },
                        ]
                            
                        
                    },
                   
                ]
            },
            {
                title: "Cause of Death (Mortality) - Legacy",
                description: "Two standard configuration packages are available for reporting of causes of death using ICD-10-SMoL, one configured as a DHIS2 Tracker program, one as DHIS2 Event program (also known as Tracker without registration). ICD-10-SMoL is described further here.",
                config: [
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.2.1 - Legacy",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/cause-of-death/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_COD_COMPLETE_1.2.1_DHIS2.37.json"
                            },
                            
                        ]
                    },
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.2.1 - Legacy",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/cause-of-death/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_COD_COMPLETE_1.2.1_DHIS2.37.json"
                            },
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.2.1 - Legacy",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/cause-of-death/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_COD_COMPLETE_1.2.1_DHIS2.36.json"
                            },    
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.2.1 - Legacy",
                        resources: "https://packages.dhis2.org/fr/CRVS_COD/1.2.1/CRVS_COD_COMPLETE_1.2.1_DHIS2.37.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_COD_COMPLETE_1.2.1_DHIS2.36.json"
                            },  
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.2.0 - Discontinued",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/COD/COD-TRK_EN_V1_DHIS2.36/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/COD/COD-TRK_EN_V1_DHIS2.36/metadata.json"
                            },
                        ]   
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.2.0 - Discontinued",
                        resources: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/COD/COD-EVT_EN_V1_DHIS2.36/reference.xlsx",
                        metadata: [
                            {
                                type: "tracker",
                                json: "https://github.com/dhis2/metadata-package-development/raw/master/metadata/COD/COD-EVT_EN_V1_DHIS2.36/metadata.json"
                            },  
                        ]
                    },
                   
                ]
            },
            {
                title: "Rapid Mortality Surveillance",
                description: "The Rapid Mortality Surveillance (RMS) package uses the DHIS2 event data model (tracker program without registration) to record line-listed fact-of-death reporting from communities and health facilities. Combined with historical data on total deaths (captured in the HMIS, or modeled and imported), the RMS module provides powerful analyses for calculating excess deaths and understanding the true impact of epidemics in near real-time.This package is aligned to the WHO’s Technical Package for Rapid Mortality Surveillance and Epidemic Response (2020) for assessing the toll of COVID-19 in countries and was developed with support from US CDC.",
                config: [
                    {
                        dhis2Version: "2.37.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/rapid-mortality-surveillance/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "RMS000_1.0.0_DHIS2.37.json"
                            },
                            
                        ]
                    },
                    {
                        dhis2Version: "2.36.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/rapid-mortality-surveillance/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "CRVS_RMSE_COMPLETE_1.0.0_DHIS2.36.json"
                            },    
                        ]
                    },
                    {
                        dhis2Version: "2.35.0",
                        packageVersion: "1.0.0",
                        resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/rapid-mortality-surveillance/overview.html",
                        metadata: [
                            {
                                type: "tracker",
                                json: "RMS000_1.0.0_DHIS2.35.json"
                            },  
                        ]
                    },
                   
                ]
            },       
        ]
        },
        {
            title: "Reproductive, Maternal, Newborn, Child and Adolescent Health (RMNCAH)",
            description: "Three standard configuration packages are available for RMNCAH: a complete aggregate configuration package that includes data collection and dashboards, a dashboard configuration package that includes dashboards only, and an Antenatal Care (ANC) Tracker package.",
            image: "https://dhis2.org/wp-content/uploads/package-RMNCAH.png",
            packages: [
                {
                    title: "Vital Events Notification",
                    description: "The Vital Events (VE) Tracker is a tool designed to expand coverage of the reporting of vital events from health facilities such as birth, stillbirths, and death to the national CRVS. The VE tracker program allows triggering of real time notifications directly from the point of care. Notifications alone will not replace the official National CRVS or the legal framework of implementing countries, but it is expected to improve and strengthen the foundation of a reliable demographic statistical repository that provides key denominator data for many health performance indicators in the HMIS such as vaccination coverage.This package was developed with UNICEF in support of Health Sector Contributions Towards Improving The Civil Registration of Births and Deaths in Low-Income Countries with support from Gavi. Watch our short video overview for more information on this package.",
                    config: [
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "1.1.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/rmncah/rmncah-aggregate/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.36/metadata.json"
                                },
                                
                            ]
                        },
                        {
                            dhis2Version: "2.35.0",
                            packageVersion: "1.1.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.35/metadata.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.34.0",
                            packageVersion: "1.1.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.34/metadata.json"
                                },    
                            ]
                        },
                        {
                            dhis2Version: "2.33.0",
                            packageVersion: "1.1.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.33/metadata.json"
                                },  
                            ]
                        },
                        {
                            dhis2Version: "2.32.0",
                            packageVersion: "1.0.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.32/metadata.json"
                                },
                            ] 
                        },
                        {
                            dhis2Version: "2.31.0",
                            packageVersion: "1.0.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.31/metadata.json"
                                },
                            ] 
                        },
                        {
                            dhis2Version: "2.30.0",
                            packageVersion: "1.0.0 - Dashboard",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_DASHBOARD_V1_DHIS2.30/metadata.json"
                                },
                            ] 
                        },
                        {
                            dhis2Version: "2.36.0",
                            packageVersion: "1.1.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/rmncah/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.36/metadata.json"
                                },
                                
                            ]
                        },
                        {
                            dhis2Version: "2.35.0",
                            packageVersion: "1.1.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.35/metadata.json"
                                },
                            ]
                        },
                        {
                            dhis2Version: "2.34.0",
                            packageVersion: "1.1.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.34/metadata.json"
                                },    
                            ]
                        },
                        {
                            dhis2Version: "2.33.0",
                            packageVersion: "1.1.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.33/metadata.json"
                                },  
                            ]
                        },
                        {
                            dhis2Version: "2.32.0",
                            packageVersion: "1.0.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.32/metadata.json"
                                },
                            ] 
                        },
                        {
                            dhis2Version: "2.31.0",
                            packageVersion: "1.0.0 - Complete",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.31/metadata.json"
                                },
                            ] 
                        },
                        {
                            dhis2Version: "2.30.0",
                            packageVersion: "1.1.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/crvs-mortality/vital-events/overview.html",
                            metadata: [
                                {
                                    type: "aggregate",
                                    json: "https://raw.githubusercontent.com/dhis2/metadata-package-development/master/metadata/RMNCAH/RMNCAH_COMPLETE_V1_DHIS2.30/metadata.json"
                                },
                            ] 
                        },
                       
                    ]
                },
                {
                    title: "Antenatal Care (ANC) Tracker package",
                    description: "A DHIS2 Tracker for Antenatal Care (ANC), or care during pregnancy at primary healthcare level. This DHIS2 Tracker configuration is designed to match as closely as possible to the World Health Organization (WHO) Digital Adaptation Kit (DAK) for Antenatal Care, part of the WHO’s SMART guidelines initiative. The WHO ANC DAK provides a comprehensive list of data elements for various services and stages in a typical ANC program, as well as nine indicators. After installing, implementers should only keep the relevant metadata according to local contexts and national health guidelines. We also recommend users to refer to the DAK documentation and Web Annexes for a broader conceptual understanding of this use case. An adapted version of this ANC Registry is currently being implemented as a part of a research project in primary health care centers across two districts of Uganda, in collaboration between the Makerere University School of Public Health, HISP Uganda, Norwegian Institute of Public Health, University of Oslo and the University of Bergen. This configuration, derived from the recommended ANC DAK data elements list, was used as a baseline demo configuration of DHIS2 during partner consultations before being contextualized to the Ugandan setting. The download includes a dashboard presenting the nine core indicators, concept mappings for data elements and Tracked Entity attributes to other coding systems, and program rules for skip logics and data validations, including an example decision support system for hypertension.",
                    config: [
                        {
                            dhis2Version: "2.37.0",
                            packageVersion: "1.0.0",
                            resources: "https://docs.dhis2.org/en/topics/metadata/rmncah/rmncah-antenatal-care-registry/overview.html",
                            metadata: [
                                {
                                    type: "tracker",
                                    json: "RMNCAH_ANC_COMPLETE_1.0.0_DHIS2.37.json"
                                },
                                
                            ]
                        },
                    ]
                },
            ]
            },
            {
                title: "Non-communicable Diseases (NCDs)",
                description: "Non-communicable diseases (NCDs), also known as chronic diseases, kill 41 million people each year, equivalent to 71% of all deaths globally. Currently, one DHIS2 configuration package is available for NCDs: a hypertension control package that includes a Tracker program to document routine blood pressure monitoring visits plus a hypertension program monitoring dashboard, based on an implementation in Nigeria. Indicators for the package dashboard were derived from the WHO HEARTS Technical package for hypertension management.",
                image: "https://dhis2.org/wp-content/uploads/package-NCD.png",
                packages: [
                    
                ]
            }                              
     
                       
    
];


const jsonData = JSON.stringify(categories, null, 2);

console.log(jsonData); 
export const metadataData = categories;
