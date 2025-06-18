import css from "./WorkSteps.module.css";
import img from "../../assets/images/face_1.jpg";
import sprite from "../../assets/icons/sprite.svg";
import { useEffect, useRef } from "react";

export const WorkSteps = () => {
    const workflowRef = useRef(null);
    const switchersRef = useRef(null);

    useEffect(() => {
        const workflow = workflowRef.current;
        const switchers = switchersRef.current.querySelectorAll(
            `.${css.switcherBar}`
        );

        if (!workflow || switchers.length === 0) return;

        const handleScroll = () => {
            const scrollPosition = workflow.scrollLeft;
            const maxScroll = workflow.scrollWidth - workflow.clientWidth;
            const scrollPercentage = scrollPosition / maxScroll;

            const numSwitchers = switchers.length;
            const activeIndex = Math.min(
                Math.floor(scrollPercentage * numSwitchers),
                numSwitchers - 1
            );

            switchers.forEach((switcherBar, index) => {
                const switcher = switcherBar.querySelector(`.${css.switcher}`);

                if (index < activeIndex) {
                    switcher.style.left = "0";
                } else if (index > activeIndex) {
                    switcher.style.left = "-100%";
                } else {
                    const partialScrollPercentage =
                        scrollPercentage * numSwitchers - activeIndex;
                    const position = -100 + partialScrollPercentage * 100;
                    switcher.style.left = `${position}%`;
                }
            });
        };

        handleScroll();

        workflow.addEventListener("scroll", handleScroll);

        return () => {
            workflow.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={css.workStepsOverlay}>
            <div className={css.header}>
                <h2 className={css.workStepsTitle}>
                    <div className={css.workStepsTitleTop}>
                        <span>The</span>
                        way
                        <div className={css.personWrapper}>
                            <img
                                className={css.personImage}
                                src={img}
                                alt="face of the founder"
                            />
                            <div className={css.personIconWrapper}>
                                <svg className={css.personIcon}>
                                    <use href={`${sprite}#icon-play`}></use>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={css.workStepsTitleBottom}>we work</div>
                </h2>

                <p className={css.workStepsText}>
                    We grow Shopify stores <span>from 4 to 6 figures</span> in
                    revenue using creative strategies in performance marketing
                </p>
            </div>

            <div className={css.footer}>
                <ul
                    className={css.workflow}
                    ref={workflowRef}>
                    <li className={css.workflowWeekWrapper}>
                        <div className={css.workflowWeek}>
                            <div>
                                <p className={css.workflowWeekHeader}>
                                    <span>[1]</span>
                                    <span>Week</span>
                                    <svg className={css.workflowWeekHeaderIcon}>
                                        <use
                                            href={`${sprite}#icon-calendar-inner`}></use>
                                    </svg>
                                </p>

                                <h4 className={css.workflowWeekTitle}>
                                    Onboarding
                                </h4>

                                <div className={css.workflowWeekIconWrapper}>
                                    <svg className={css.workflowWeekIcon}>
                                        <use href={`${sprite}#icon-pen`}></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className={css.workflowWeekTasks}>
                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        1
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Briefing
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        2
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Debriefing
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        3
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Account access
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        4
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Project system setup
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={css.workflowWeekWrapper}>
                        <div className={css.workflowWeek}>
                            <div>
                                <p className={css.workflowWeekHeader}>
                                    <span>[2]</span>
                                    <span>Week</span>
                                    <svg className={css.workflowWeekHeaderIcon}>
                                        <use
                                            href={`${sprite}#icon-calendar-inner`}></use>
                                    </svg>
                                </p>

                                <h4 className={css.workflowWeekTitle}>
                                    Explore
                                </h4>

                                <div className={css.workflowWeekIconWrapper}>
                                    <svg className={css.workflowWeekIcon}>
                                        <use
                                            href={`${sprite}#icon-search`}></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className={css.workflowWeekTasks}>
                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        5
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Unit economics
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        6
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Website audit
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        7
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Advertising audit
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        8
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Competitor analysis
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        9
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Strategy development
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={css.workflowWeekWrapper}>
                        <div className={css.workflowWeek}>
                            <div>
                                <p className={css.workflowWeekHeader}>
                                    <span>[3]</span>
                                    <span>Week</span>
                                    <svg className={css.workflowWeekHeaderIcon}>
                                        <use
                                            href={`${sprite}#icon-calendar-inner`}></use>
                                    </svg>
                                </p>

                                <h4 className={css.workflowWeekTitle}>Setup</h4>

                                <div className={css.workflowWeekIconWrapper}>
                                    <svg className={css.workflowWeekIcon}>
                                        <use
                                            href={`${sprite}#icon-setup`}></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className={css.workflowWeekTasks}>
                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        10
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Tracking setup
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        11
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Merchant setup
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        12
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Ad content creation
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        13
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Campaigns setup
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className={css.workflowWeekWrapper}>
                        <div className={css.workflowWeek}>
                            <div>
                                <p className={css.workflowWeekHeader}>
                                    <span>[4]</span>
                                    <span>Week</span>
                                    <svg className={css.workflowWeekHeaderIcon}>
                                        <use
                                            href={`${sprite}#icon-calendar-inner`}></use>
                                    </svg>
                                </p>

                                <h4 className={css.workflowWeekTitle}>Grow</h4>

                                <div className={css.workflowWeekIconWrapper}>
                                    <svg className={css.workflowWeekIcon}>
                                        <use
                                            href={`${sprite}#icon-graph`}></use>
                                    </svg>
                                </div>
                            </div>

                            <ul className={css.workflowWeekTasks}>
                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        14
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Reporting setup
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        15
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Actionable insights
                                    </p>
                                </li>

                                <li className={css.workflowWeekTask}>
                                    <div className={css.workflowWeekTaskNum}>
                                        16
                                    </div>

                                    <p className={css.workflowWeekTaskText}>
                                        Results optimization
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <ul
                    className={css.switchers}
                    ref={switchersRef}>
                    <li className={css.switcherBar}>
                        <div className={css.switcher}></div>
                    </li>
                    <li className={css.switcherBar}>
                        <div className={css.switcher}></div>
                    </li>
                    <li className={css.switcherBar}>
                        <div className={css.switcher}></div>
                    </li>
                    <li className={css.switcherBar}>
                        <div className={css.switcher}></div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
