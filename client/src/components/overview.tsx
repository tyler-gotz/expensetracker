import React, { SVGProps, useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer, SectorProps, Cell } from 'recharts'
import { PieSectorDataItem } from 'recharts/types/polar/Pie'

type OverviewProps = {
    data: { name: string, value: number }[]
}

type CustomSectorProps = SVGProps<SVGPathElement> & SectorProps & {
    payload: PieSectorDataItem;
    percent: number;
    value: number;
    midAngle: number;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const COLORS = Array.from({ length: 7 }, getRandomColor);

const Overview: React.FC<OverviewProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const renderActiveShape: (props: SectorProps) => JSX.Element = (props) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props as CustomSectorProps;

        const RADIAN = Math.PI / 180;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const updatedCx = cx || 0;
        const updatedCy = cy || 0;
        const updateOuterRadius = outerRadius || 0;

        const sx = updatedCx + (updateOuterRadius + 10) * cos;
        const sy = updatedCy + (updateOuterRadius + 10) * sin;
        const mx = updatedCx + (updateOuterRadius + 30) * cos;
        const my = updatedCy + (updateOuterRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={updateOuterRadius + 6}
                    outerRadius={updateOuterRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFFFFF">{`$${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`${(percent * 100).toFixed(2)}%`}
                </text>
            </g>
        );
    }

    return (
        <ResponsiveContainer width='100%' height={350}>
            <PieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Overview