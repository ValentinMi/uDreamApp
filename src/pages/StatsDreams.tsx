import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import LineChart from "../components/LineChart";
import { getUserDreamStats } from "../api/stats.api";
import Loading from "../components/Loading";
import colors from "../utils/colors";

interface StatsDreamsProps {}

interface DreamsData {
  dateLabels: Date[];
  datasets: number[];
}

const StatsDreams: React.FC<StatsDreamsProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dreamsData, setDreamsData] = useState<DreamsData | undefined>(
    undefined
  );
  const [averageDreamsNote, setAverageDreamsNote] = useState<number | null>(
    null
  );

  const treatDreamsData = (data: any) => {
    const dateLabels = [];
    const datasets = [];
    data.forEach(dream => {
      dateLabels.push(new Date(dream.date).toLocaleDateString());
      datasets.push(dream.note);
    });
    return {
      dateLabels,
      datasets
    };
  };

  const fetchDreamsData = useCallback(async () => {
    const { dreamStats, noteAverage } = await getUserDreamStats();
    setAverageDreamsNote(noteAverage);
    const treatedData = treatDreamsData(dreamStats);
    setDreamsData(treatedData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!dreamsData) {
      fetchDreamsData();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={styles.chartContainer}>
          <Text style={styles.header}>Average: {averageDreamsNote}</Text>
          {dreamsData && (
            <LineChart
              labels={dreamsData.dateLabels}
              data={dreamsData.datasets}
            />
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  chartContainer: {},
  header: {
    backgroundColor: colors.primary,
    padding: 10,
    color: "white"
  }
});

export default StatsDreams;
