import { useTheme } from '@mui/material/styles';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Table = () => {
    const theme = useTheme(); 

    const leagueData = [
        // Your league data here...
    ];

    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: "10px",
                marginTop: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for glass effect
                backdropFilter: 'blur(10px)',
            }}
        >
            <Typography variant="h6" align="center" sx={{ margin: 2, color: theme.palette.text.primary }}>
                League Standings
            </Typography>
            <MuiTable size="small">
                <TableHead>
                    <TableRow>
                        {['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts', 'Last 5', 'Competition'].map((header) => (
                            <TableCell align="center" key={header} sx={{ color: theme.palette.text.primary }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leagueData.map((team, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover } }}
                        >
                            <TableCell sx={{ color: theme.palette.text.primary }}>{team.club}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.mp}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.w}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.d}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.l}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.gf}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.ga}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.gd}</TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.pts}</TableCell>
                            <TableCell align="center">
                                {team.last5.map((result, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            margin: '0 2px',
                                            color:
                                                result === 'Win'
                                                    ? theme.palette.success.main
                                                    : result === 'Draw'
                                                    ? theme.palette.warning.main
                                                    : theme.palette.error.main,
                                        }}
                                    >
                                        {result[0]}
                                    </span>
                                ))}
                            </TableCell>
                            <TableCell align="center" sx={{ color: theme.palette.text.primary }}>{team.competition}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

export default Table;
