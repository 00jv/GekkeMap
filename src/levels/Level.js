import React, {Component} from 'react';
import './normalize.css';
import './Level.css';

class Level extends Component{
    render() {
        return (
            <div className={this.props.cssClass}>
                <svg className="map map--1" viewBox="0 0 1200 800" width="100%" height="100%"
                     preserveAspectRatio="xMidYMid meet">
                    <title>{this.props.title}</title>
                    <polygon
                        points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41"
                        className="map__ground"/>
                    <path
                        d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z"
                        className="map__outline"/>
                    <path
                        d="M425.68,198.63c-6.85-14.83-46.38-30.35-58-11.24-41.24,67.9-83.63,118.16-65.12,124.22,7.55,2.48,56.77.11,94.11-54.39,21.35-31.13,31.71-52.74,29-58.59h0Z"
                        className="map__lake"/>
                    <ellipse cx="389.64" cy="214.94" rx="13.95" ry="13.8" className="map__tree"/>
                    <ellipse cx="369.54" cy="191.71" rx="13.95" ry="13.8" className="map__tree"/>
                    <ellipse cx="354.59" cy="220.27" rx="13.95" ry="13.8" className="map__tree"/>
                    <path
                        d="M724.87,696.45c14.61,7.58,42.34-6.42,52.85-26.15,24.57-46.13-43.25-126.94-61.66-120.57-7.5,2.6-6.47,29.34-4.4,82.81C713.74,686.25,719.12,693.46,724.87,696.45Z"
                        className="map__lake"/>
                    <ellipse cx="738.82" cy="595.48" rx="13.95" ry="13.8" className="map__tree"/>
                    <ellipse cx="768.46" cy="605.4" rx="13.95" ry="13.8" className="map__tree"/>
                    <ellipse cx="744.64" cy="624.92" rx="13.95" ry="13.8" className="map__tree"/>
                    <polygon data-space="1.04"
                             points="874.9,554.3 874.9,422.9 1036.1,422.9 1036.1,576.6 965.2,576.6 965.2,555"
                             className="map__space"/>
                    <rect x="854.08" y="639.79" width="88.09" height="147.62" className="map__space"/>
                    <rect x="947.85" y="639.79" width="88.09" height="147.62" className="map__space"/>
                    <polygon
                        points="768.46 722.99 789.65 735.1 789.65 759.31 768.46 771.42 747.27 759.31 747.27 735.1 768.46 722.99"
                        className="map__space"/>
                    <rect x="666.88" y="565.62" width="26.26" height="25.99" className="map__space"/>
                    <rect data-space="1.07" x="716.66" y="354.39" width="110.72" height="136.73" className="map__space"/>
                    <rect x="602.1" y="354.39" width="110.72" height="136.73" className="map__space"/>
                    <path data-space="1.05"
                          d="M454.76,266.19h63a24.34,24.34,0,0,1,24.47,24.21h0V489.82A24.34,24.34,0,0,1,517.74,514h-63a24.34,24.34,0,0,1-24.47-24.21h0V290.4a24.34,24.34,0,0,1,24.47-24.21h0Z"
                          className="map__space"/>
                    <path
                        d="M492.72,123.19c30.57,0,55.36-24.53,55.36-54.78H437.36C437.36,98.67,462.15,123.19,492.72,123.19Z"
                        className="map__space"/>
                    <rect data-space="1.09" x="600" y="12.59" width="93.14" height="168.14" className="map__space"/>
                    <rect data-space="1.08" x="698.07" y="12" width="93.14" height="168.14" className="map__space"/>
                    <rect x="796.13" y="12" width="93.14" height="107.12" className="map__space"/>
                    <rect x="894.18" y="12" width="93.14" height="107.12" className="map__space"/>
                    <rect data-space="1.03" x="991.9" y="12" width="195.4" height="339.1" className="map__space"/>
                    <rect x="602" y="278.06" width="385.71" height="72.46" className="map__space"/>
                    <rect x="48.89" y="209.37" width="169.92" height="94.85" className="map__space"/>
                    <rect data-space="1.02" x="49.12" y="110.57" width="254.49" height="94.85" className="map__space"/>
                    <rect data-space="1.06" x="49.09" y="12.16" width="334.73" height="94.85" className="map__space"/>
                    <polygon
                        points="898.12 182.42 919.31 194.53 919.31 218.74 898.12 230.85 876.93 218.74 876.93 194.53 898.12 182.42"
                        className="map__space"/>
                    <polygon
                        points="49.18 309.14 218.94 309.14 218.94 358.1 277.46 358.1 277.46 474.63 11.72 474.63 11.72 365.63 49.18 365.63 49.18 309.14"
                        className="map__space"/>
                    <polygon data-space="1.01"
                             points="12.72 685.56 153.78 685.56 153.78 747.64 215.44 747.64 215.44 712.85 263.89 712.85 263.89 787.41 12.72 787.41 12.72 685.56"
                             className="map__space"/>
                    <rect x="48.08" y="501.73" width="35.61" height="35.23" className="map__space"/>
                    <rect x="94.01" y="501.73" width="35.61" height="35.23" className="map__space"/>
                    <rect x="139.5" y="501.73" width="35.61" height="35.23" className="map__space"/>
                    <rect x="48.3" y="547.25" width="35.61" height="35.23" className="map__space"/>
                    <rect x="94.24" y="547.25" width="35.61" height="35.23" className="map__space"/>
                    <rect x="139.72" y="547.25" width="35.61" height="35.23" className="map__space"/>
                    <rect x="282.3" y="478.13" width="26.26" height="25.99" className="map__space"/>
                    <polygon
                        points="218.01 585.07 239.2 597.17 239.2 621.38 218.01 633.49 196.82 621.38 196.82 597.17 218.01 585.07"
                        className="map__space"/>
                    <polygon points="410.01 601.42 358.8 778.44 320.06 767.07 372.92 591.6 410.01 601.42"
                             className="map__space"/>
                    <polygon points="561.3,603.9 624,777 661.9,763.2 597.7,591.5" className="map__space"/>
                </svg>
            </div>
        )
    }
}

export default Level;