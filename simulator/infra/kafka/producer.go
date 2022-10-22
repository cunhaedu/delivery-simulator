package kafka

import (
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	"log"
	"os"
)

func NewKafkaProducer() *ckafka.Producer {
	configMap := &ckafka.ConfigMap{
		"bootstrap.servers": os.Getenv("KAFKA_BOOTSTRAP_SERVERS"),
	}

	p, err := ckafka.NewProducer(configMap)
	if err != nil {
		log.Println(err.Error())
	}

	return p
}

func NewKafkaConsumer(msgChannel chan *ckafka.Message) *KafkaConsumer {
	return &KafkaConsumer{
		MsgChan: msgChannel,
	}
}

func Publish(msg string, topic string, producer *ckafka.Producer) error {
	message := &ckafka.Message{
		TopicPartition: ckafka.TopicPartition{Topic: &topic, Partition: ckafka.PartitionAny},
		Value:          []byte(msg),
	}

	err := producer.Produce(message, nil)
	if err != nil {
		return err
	}

	return nil
}
